"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = void 0;
const token_1 = require("../functions/token");
async function verifyToken(req, res, next) {
    try {
        if (req.path === "/users/signin" ||
            req.path === "/users/" && req.method !== "GET") {
            res.locals.signin = true;
            next();
        }
        else {
            const token = req.headers.authorization;
            if (token === undefined)
                throw new Error(`token not provided`);
            if (req.headers.username === undefined)
                throw new Error(`username not provided`);
            const tok = await (0, token_1.validToken)(token.substring(7), req);
            res.locals.role = tok.role;
            next();
        }
    }
    catch (err) {
        res.status(400).json(err.message);
    }
}
exports.verifyToken = verifyToken;
