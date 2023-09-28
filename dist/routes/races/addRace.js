"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addRace = void 0;
const race_1 = require("../../db/models/race");
const messageResponse_1 = require("../../functions/messageResponse");
async function addRace(req, res, next) {
    try {
        const input = req.body;
        if (Object.keys(input).length === 0)
            throw new Error("Missing input");
        const race = await race_1.Race.create({
            name: input?.name,
            year: input?.year,
            round: input?.round,
            circuitId: input?.circuitId,
            competitionId: input?.competitionId,
        });
        res.status(200).json((0, messageResponse_1.successMessage)(`Race added successfully`, race));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.addRace = addRace;
