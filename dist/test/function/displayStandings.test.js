"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const db_1 = require("../../db");
const displayStandings_1 = require("../../functions/displayStandings");
const driver_1 = require("../../db/models/driver");
const race_1 = require("../../db/models/race");
const competition_1 = require("../../db/models/competition");
const ranking_1 = require("../../db/models/ranking");
const driverWithPoints_1 = require("../../functions/driverWithPoints");
(0, vitest_1.test)("test displayStandings function", async () => {
    // Preparation before test
    const driversPoints = [];
    try {
        await (0, db_1.dbConnection)();
        // STEP 1: Find Drivers
        const drivers = await driver_1.Driver.findAll({
            include: {
                model: race_1.Race,
                include: [
                    {
                        model: competition_1.Competition,
                        include: [{ model: ranking_1.Ranking }],
                    },
                ],
            },
        });
        // STEP 2: Calculate Driver's Point
        for (const driver of drivers) {
            const driverWithPoints = await (0, driverWithPoints_1.DriverWithPoints)(driver);
            driversPoints.push(driverWithPoints);
        }
    }
    catch (err) {
        console.log(err);
    }
    // Runing test
    (0, vitest_1.expect)(await (0, displayStandings_1.displayStandings)(driversPoints, true)).toEqual(vitest_1.expect.arrayContaining([
        vitest_1.expect.objectContaining({
            id: vitest_1.expect.any(Number),
            firstName: vitest_1.expect.any(String),
            lastName: vitest_1.expect.any(String),
            number: vitest_1.expect.any(Number),
            points: vitest_1.expect.any(Number),
            teamId: vitest_1.expect.any(Number),
            ranking: vitest_1.expect.any(Number)
        })
    ]));
});
