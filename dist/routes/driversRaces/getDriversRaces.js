"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDriversRaces = void 0;
const driversRaces_1 = require("../../db/models/driversRaces");
const messageResponse_1 = require("../../functions/messageResponse");
async function getDriversRaces(req, res, next) {
    try {
        const driversRaces = await driversRaces_1.DriversRaces.findAll();
        res
            .status(200)
            .json((0, messageResponse_1.successMessage)("DriversRaces found successfully", driversRaces));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getDriversRaces = getDriversRaces;
