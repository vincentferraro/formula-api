"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const db_1 = require("./db");
const competitions_1 = __importDefault(require("./routes/competitions"));
const teams_1 = __importDefault(require("./routes/teams"));
const circuits_1 = __importDefault(require("./routes/circuits"));
const drivers_1 = __importDefault(require("./routes/drivers"));
const races_1 = __importDefault(require("./routes/races"));
const users_1 = __importDefault(require("./routes/users"));
const rankings_1 = __importDefault(require("./routes/rankings"));
const driversRaces_1 = __importDefault(require("./routes/driversRaces"));
const verifytoken_1 = require("./middlewares/verifytoken");
const hasRights_1 = require("./middlewares/hasRights");
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");
const app = (0, express_1.default)();
exports.app = app;
const port = 3000;
// MIDDLEWARE
app.use(express_1.default.json());
app.use((0, helmet_1.default)());
app.use(verifytoken_1.verifyToken);
app.use(hasRights_1.hasRights);
(0, db_1.dbConnection)();
// ROUTES
app.use("/competitions", competitions_1.default);
app.use("/teams", teams_1.default);
app.use("/circuits", circuits_1.default);
app.use("/drivers", drivers_1.default);
app.use("/races", races_1.default);
app.use("/users", users_1.default);
app.use("/rankings", rankings_1.default);
app.use("/driversraces", driversRaces_1.default);
app.get("/", (req, res) => {
    res.send("Welcome to Formula-api");
});
// LISTENER
app.listen(port, () => {
    console.log(`Server Launched: http://localhost:${port}/ `);
});
// ZONE TEST
