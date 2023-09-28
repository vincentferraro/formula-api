"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const db_1 = require("../../db");
const driver_1 = require("../../db/models/driver");
const driverWithPoints_1 = require("../../functions/driverWithPoints");
const competition_1 = require("../../db/models/competition");
const ranking_1 = require("../../db/models/ranking");
const race_1 = require("../../db/models/race");
(0, vitest_1.test)("test driverWithPoints function", async () => {
    let driverResult;
    // Preparation before test
    try {
        await (0, db_1.dbConnection)();
        driverResult = await driver_1.Driver.findByPk(1, {
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
    }
    catch (err) {
        console.log(err);
    }
    // @ts-ignore
    (0, vitest_1.expect)(await (0, driverWithPoints_1.DriverWithPoints)(driverResult)).toEqual(vitest_1.expect.objectContaining({
        id: vitest_1.expect.any(Number),
        firstName: vitest_1.expect.any(String),
        lastName: vitest_1.expect.any(String),
        number: vitest_1.expect.any(Number),
        points: vitest_1.expect.any(Number),
        teamId: vitest_1.expect.any(Number)
    }));
});
