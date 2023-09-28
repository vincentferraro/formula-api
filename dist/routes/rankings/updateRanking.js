"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRanking = void 0;
const ranking_1 = require("../../db/models/ranking");
const messageResponse_1 = require("../../functions/messageResponse");
async function updateRanking(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const input = req.body;
        if (typeof id !== "number")
            throw new Error("No id provided");
        const ranking = await ranking_1.Ranking.findByPk(id);
        if (ranking === null)
            throw new Error(`Ranking with id ${id} not found`);
        await ranking.update({ ...input });
        res.status(200).json((0, messageResponse_1.successMessage)(`Ranking with id ${id} updated successfully`, ranking));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.updateRanking = updateRanking;
