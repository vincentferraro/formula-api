"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDriversPoints = void 0;
const driver_1 = require("../../db/models/driver");
const race_1 = require("../../db/models/race");
const ranking_1 = require("../../db/models/ranking");
const competition_1 = require("../../db/models/competition");
const driverWithPoints_1 = require("../../functions/driverWithPoints");
const messageResponse_1 = require("../../functions/messageResponse");
async function getDriversPoints(req, res, next) {
    try {
        const driversPoints = [];
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
        for (const driver of drivers) {
            const driverWithPoints = await (0, driverWithPoints_1.DriverWithPoints)(driver);
            driversPoints.push(driverWithPoints);
        }
        res.status(200).json((0, messageResponse_1.successMessage)(`Drivers with Points found successfully`, driversPoints));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getDriversPoints = getDriversPoints;
