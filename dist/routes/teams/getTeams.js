"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeams = void 0;
const team_1 = require("../../db/models/team");
const messageResponse_1 = require("../../functions/messageResponse");
async function getTeams(req, res, next) {
    try {
        const teams = await team_1.Team.findAll();
        res.status(200).json((0, messageResponse_1.successMessage)(`Teams found successfully`, teams));
    }
    catch (err) {
        res.status(400).send((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getTeams = getTeams;
