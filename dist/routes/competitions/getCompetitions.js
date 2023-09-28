"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCompetitions = void 0;
const competition_1 = require("../../db/models/competition");
const messageResponse_1 = require("../../functions/messageResponse");
async function getCompetitions(req, res, next) {
    try {
        const competition = await competition_1.Competition.findAll();
        res.status(200).json((0, messageResponse_1.successMessage)('Competitions found successfully', competition));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getCompetitions = getCompetitions;
