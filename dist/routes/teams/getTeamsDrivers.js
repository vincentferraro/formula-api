"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeamsDriver = void 0;
const team_1 = require("../../db/models/team");
const driver_1 = require("../../db/models/driver");
const messageResponse_1 = require("../../functions/messageResponse");
async function getTeamsDriver(req, res, next) {
    try {
        const teamsDrivers = await team_1.Team.findAll({
            include: driver_1.Driver,
        });
        res.status(200).json((0, messageResponse_1.successMessage)(`Teams with Drivers found successfully`, teamsDrivers));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getTeamsDriver = getTeamsDriver;
