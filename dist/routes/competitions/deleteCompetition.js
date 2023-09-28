"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteCompetition = void 0;
const competition_1 = require("../../db/models/competition");
const messageResponse_1 = require("../../functions/messageResponse");
async function deleteCompetition(req, res, next) {
    const id = parseInt(req.params.id);
    if (!req.params.id) {
        throw new Error("id missing");
    }
    try {
        const competition = await competition_1.Competition.findByPk(id);
        if (competition == null) {
            throw new Error(`Competition with id ${id} not found`);
        }
        await competition.destroy();
        res.status(200).send((0, messageResponse_1.successMessage)(`Competition with id ${id} removed successfully`));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.deleteCompetition = deleteCompetition;
