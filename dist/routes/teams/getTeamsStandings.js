"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeamsStandings = void 0;
const teamStandings_1 = require("../../functions/teams/teamStandings");
const messageResponse_1 = require("../../functions/messageResponse");
async function getTeamsStandings(req, res, next) {
    try {
        const result = await (0, teamStandings_1.teamStandings)();
        if (result instanceof Error)
            throw result;
        res.status(200).json((0, messageResponse_1.successMessage)("Teams Standing found successfully", result));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getTeamsStandings = getTeamsStandings;
