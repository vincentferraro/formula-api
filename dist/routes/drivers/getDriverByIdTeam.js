"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDriverByIdTeam = void 0;
const driver_1 = require("../../db/models/driver");
const team_1 = require("../../db/models/team");
const messageResponse_1 = require("../../functions/messageResponse");
async function getDriverByIdTeam(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        if (typeof id !== "number")
            throw new Error("No id provided");
        const driver = await driver_1.Driver.findByPk(id, {
            include: team_1.Team,
        });
        if (driver === null)
            throw new Error(`Driver with id ${id} not found`);
        res.status(200).json((0, messageResponse_1.successMessage)(`Driver with id ${id} with Team found successfully`, driver));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getDriverByIdTeam = getDriverByIdTeam;
