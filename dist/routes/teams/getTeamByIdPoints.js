"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeamByIdPoints = void 0;
const messageResponse_1 = require("../../functions/messageResponse");
const teamPoints_1 = require("../../functions/teams/teamPoints");
async function getTeamByIdPoints(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        if (typeof id !== "number")
            throw new Error("No id provided");
        const result = await (0, teamPoints_1.teamPoint)(id);
        if (result instanceof Error)
            throw result;
        res.status(200).json((0, messageResponse_1.successMessage)('Team with points found successfully', result));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getTeamByIdPoints = getTeamByIdPoints;
