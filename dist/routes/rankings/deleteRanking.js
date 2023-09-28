"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRanking = void 0;
const ranking_1 = require("../../db/models/ranking");
const messageResponse_1 = require("../../functions/messageResponse");
async function deleteRanking(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        if (typeof id !== "number")
            throw new Error("No id provided");
        const ranking = await ranking_1.Ranking.findByPk(id);
        if (ranking === null)
            throw new Error(`Ranking with id ${id} not found`);
        await ranking.destroy();
        res.status(200).json((0, messageResponse_1.successMessage)(`Ranking with id ${id}removed successfully`));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.deleteRanking = deleteRanking;
