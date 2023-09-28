"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamStandings = void 0;
const team_1 = require("../../db/models/team");
const teamPoints_1 = require("./teamPoints");
const displayStandings_1 = require("../displayStandings");
async function teamStandings() {
    try {
        const teamsArray = [];
        const teams = await team_1.Team.findAll();
        for (const team of teams) {
            const teamPointResult = await (0, teamPoints_1.teamPoint)(team.id);
            if (teamPointResult instanceof Error)
                throw Error(teamPointResult.message);
            teamsArray.push(teamPointResult);
        }
        const standings = await (0, displayStandings_1.displayStandings)(teamsArray, true);
        return standings;
    }
    catch (err) {
        return err;
    }
}
exports.teamStandings = teamStandings;
