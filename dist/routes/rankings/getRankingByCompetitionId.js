"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRankingByCompetitionID = void 0;
const ranking_1 = require("../../db/models/ranking");
const messageResponse_1 = require("../../functions/messageResponse");
async function getRankingByCompetitionID(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const rankings = await ranking_1.Ranking.findAll({
            where: {
                competitionId: id
            }
        });
        if (rankings.length === 0)
            throw new Error(`Rankings not available because Competition with id ${id} not found`);
        res.status(200).json((0, messageResponse_1.successMessage)(`Rankings with Competition id ${id} found successfully`, rankings));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getRankingByCompetitionID = getRankingByCompetitionID;
