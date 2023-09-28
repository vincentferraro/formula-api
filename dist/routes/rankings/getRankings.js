"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRankings = void 0;
const ranking_1 = require("../../db/models/ranking");
const messageResponse_1 = require("../../functions/messageResponse");
async function getRankings(req, res, next) {
    try {
        const ranking = await ranking_1.Ranking.findAll();
        res
            .status(200)
            .json((0, messageResponse_1.successMessage)("Rankings found successfully", ranking));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getRankings = getRankings;
