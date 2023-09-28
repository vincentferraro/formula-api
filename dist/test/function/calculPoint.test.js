"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const db_1 = require("../../db");
const calculPoints_1 = require("../../functions/calculPoints");
const ranking_1 = require("../../db/models/ranking");
const race_1 = require("../../db/models/race");
const driver_1 = require("../../db/models/driver");
const competition_1 = require("../../db/models/competition");
(0, vitest_1.test)(" test CalculPoints function", async () => {
    let rankingArray;
    let driver;
    try {
        await (0, db_1.dbConnection)();
        rankingArray = await ranking_1.Ranking.findAll();
        driver = await driver_1.Driver.findByPk(1, {
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
    (0, vitest_1.expect)(await (0, calculPoints_1.calculPoints)(rankingArray, driver.Races)).toEqual(vitest_1.expect.any(Number));
});
