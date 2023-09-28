"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDriversTeam = void 0;
const driver_1 = require("../../db/models/driver");
const team_1 = require("../../db/models/team");
const messageResponse_1 = require("../../functions/messageResponse");
async function getDriversTeam(req, res, next) {
    try {
        const drivers = await driver_1.Driver.findAll({
            include: team_1.Team,
        });
        res.status(200).json((0, messageResponse_1.successMessage)(`Drivers with Team found successfully`, drivers));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getDriversTeam = getDriversTeam;
