"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTeam = void 0;
const team_1 = require("../../db/models/team");
const messageResponse_1 = require("../../functions/messageResponse");
async function updateTeam(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const updateTeam = req.body;
        if (typeof id !== "number")
            throw new Error("No id provided");
        const team = await team_1.Team.findByPk(id);
        if (team === null)
            throw new Error(`Team with id ${id} not found`);
        await team.update({ ...updateTeam });
        res.status(200).json((0, messageResponse_1.successMessage)(`Team with id ${id} updated successfully`, team));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.updateTeam = updateTeam;
