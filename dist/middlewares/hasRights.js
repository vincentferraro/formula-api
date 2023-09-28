"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hasRights = void 0;
// const readerRoutes = [
//   "/circuits/",
//   "/circuit/:id",
//   "/competitions/",
//   "/competitions/:id",
//   "/races/",
//   "/races/:id",
//   "/drivers/",
//   "/drivers/:id",
//   "/teams/",
//   "/teams/:id",
// ];
// Verify that the user has permission to access the requested route
async function hasRights(req, res, next) {
    if (res.locals.signin) {
        next();
    }
    else {
        if (res.locals.role === "ADMIN") {
            next();
        }
        else if (res.locals.role === "READER") {
            switch (req.method) {
                case 'PUT':
                    if (req.path === "/users/password/") {
                        next();
                    }
                    break;
                case 'GET':
                    if (req.path.includes("/users/")) {
                        res.status(403).json("access forbidden, you must be ADMIN to have access");
                    }
                    else {
                        next();
                    }
                    break;
                default:
                    res.status(403).json("Access denied, verify the following parameters: TOKEN, USERNAME, PASSWORD, PERMISSIONS (ADMIN OR READER)");
            }
        }
        else {
            res.status(403).json("Access denied, verify the following parameters: TOKEN, USERNAME, PASSWORD, PERMISSIONS (ADMIN OR READER)");
        }
    }
}
exports.hasRights = hasRights;
