"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompetitionByIdTeams = void 0;
const competition_1 = require("../../db/models/competition");
const team_1 = require("../../db/models/team");
const messageResponse_1 = require("../../functions/messageResponse");
async function getCompetitionByIdTeams(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        if (!id) {
            throw new Error("NO ID");
        }
        const competition = await competition_1.Competition.findByPk(id, {
            include: team_1.Team,
        });
        if (competition === null)
            throw new Error(`Competition with Team with id ${id} not found`);
        res.status(200).json((0, messageResponse_1.successMessage)('Competition with Team found successfully', competition));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getCompetitionByIdTeams = getCompetitionByIdTeams;
