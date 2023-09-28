"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.driverPoints = void 0;
const driver_1 = require("../../db/models/driver");
const race_1 = require("../../db/models/race");
const competition_1 = require("../../db/models/competition");
const ranking_1 = require("../../db/models/ranking");
const driverWithPoints_1 = require("../driverWithPoints");
async function driverPoints(id) {
    try {
        const driver = await driver_1.Driver.findByPk(id, {
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
        if (driver === null)
            throw new Error(`Driver with id ${id} not found`);
        //Calculate driver's points
        const driverWithPoints = await (0, driverWithPoints_1.DriverWithPoints)(driver);
        return driverWithPoints;
    }
    catch (err) {
        return err;
    }
}
exports.driverPoints = driverPoints;
