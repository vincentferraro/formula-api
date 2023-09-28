"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateRace = void 0;
const race_1 = require("../../db/models/race");
const messageResponse_1 = require("../../functions/messageResponse");
async function updateRace(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const input = req.body;
        if (typeof id !== "number")
            throw new Error("No id provided");
        const race = await race_1.Race.findByPk(id);
        if (race === null)
            throw new Error(`Race with id ${id} not found`);
        await race.update({ ...input });
        res.status(200).json((0, messageResponse_1.successMessage)(`Race with id ${race.id} updated successfully`, race));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.updateRace = updateRace;
