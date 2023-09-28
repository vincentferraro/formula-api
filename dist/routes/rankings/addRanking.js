"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRanking = void 0;
const ranking_1 = require("../../db/models/ranking");
const messageResponse_1 = require("../../functions/messageResponse");
async function addRanking(req, res, next) {
    try {
        const input = req.body;
        if (Object.keys(input).length === 0)
            throw new Error(" Missing input");
        const ranking = await ranking_1.Ranking.create({
            rank: input?.rank,
            point: input?.point,
            competitionId: input?.competitionId,
        });
        res.status(200).json((0, messageResponse_1.successMessage)("Ranking added successfully", ranking));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.addRanking = addRanking;
