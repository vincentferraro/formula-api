"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const db_1 = require("../../../db");
const teamStandings_1 = require("../../../functions/teams/teamStandings");
(0, vitest_1.test)("test teamStanding function", async () => {
    try {
        await (0, db_1.dbConnection)();
    }
    catch (err) {
        console.log(err);
    }
    (0, vitest_1.expect)(await (0, teamStandings_1.teamStandings)()).toEqual(vitest_1.expect.arrayContaining([
        vitest_1.expect.objectContaining({
            id: vitest_1.expect.any(Number),
            name: vitest_1.expect.any(String),
            location: vitest_1.expect.any(String),
            competitionId: vitest_1.expect.any(Number),
            points: vitest_1.expect.any(Number)
        })
    ]));
});
