"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompetitionById = void 0;
const competition_1 = require("../../db/models/competition");
const messageResponse_1 = require("../../functions/messageResponse");
async function getCompetitionById(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        if (!id) {
            throw new Error("No id provided");
        }
        const competition = await competition_1.Competition.findByPk(id);
        if (competition === null)
            throw new Error(`Competition with id ${id} not found`);
        res.status(200).json((0, messageResponse_1.successMessage)('Competition successfully displayed', competition));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getCompetitionById = getCompetitionById;
