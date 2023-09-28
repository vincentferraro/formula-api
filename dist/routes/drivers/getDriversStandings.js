"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDriversStandings = void 0;
const driver_1 = require("../../db/models/driver");
const race_1 = require("../../db/models/race");
const competition_1 = require("../../db/models/competition");
const ranking_1 = require("../../db/models/ranking");
const driverWithPoints_1 = require("../../functions/driverWithPoints");
const displayStandings_1 = require("../../functions/displayStandings");
const messageResponse_1 = require("../../functions/messageResponse");
async function getDriversStandings(req, res, next) {
    try {
        const driversPoints = [];
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
        // STEP 3: Sort Drivers for create the ranking
        const ranking = await (0, displayStandings_1.displayStandings)(driversPoints, true);
        res.status(200).json((0, messageResponse_1.successMessage)("Standings found successfully", ranking));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getDriversStandings = getDriversStandings;
