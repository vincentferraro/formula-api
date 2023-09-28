"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addTeam = void 0;
const team_1 = require("../../db/models/team");
const messageResponse_1 = require("../../functions/messageResponse");
async function addTeam(req, res, next) {
    try {
        const input = req.body;
        if (Object.keys(input).length === 0)
            throw new Error(" Missing input");
        const team = await team_1.Team.create({
            name: input?.name,
            location: input?.location,
            competitionId: input?.competitionId,
        });
        res.status(200).json((0, messageResponse_1.successMessage)(`Team added successfully`, team));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.addTeam = addTeam;
