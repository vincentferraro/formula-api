"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCompetition = void 0;
const competition_1 = require("../../db/models/competition");
const messageResponse_1 = require("../../functions/messageResponse");
async function updateCompetition(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const input = req.body;
        if (!req.params.id || !req.body) {
            throw new Error("id or invalid body");
        }
        const competition = await competition_1.Competition.findByPk(id);
        if (competition === null)
            throw new Error(`Competition with id ${id} not found`);
        competition?.update(input);
        res.status(200).json((0, messageResponse_1.successMessage)(`Competition with id ${competition.id} updated successfully`, competition));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.updateCompetition = updateCompetition;
