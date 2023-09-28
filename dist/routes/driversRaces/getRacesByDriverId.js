"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDriversRacesByDriverId = void 0;
const driversRaces_1 = require("../../db/models/driversRaces");
const messageResponse_1 = require("../../functions/messageResponse");
async function getDriversRacesByDriverId(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        if (typeof id !== "number")
            throw new Error("No id provided");
        const driversRaces = await driversRaces_1.DriversRaces.findAll({
            where: {
                DriverId: id,
            },
        });
        if (driversRaces === null)
            throw new Error(`Driver with id ${id} not found`);
        res
            .status(200)
            .json((0, messageResponse_1.successMessage)(`DriversRaces with DriverId ${id} found successfully`, driversRaces));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getDriversRacesByDriverId = getDriversRacesByDriverId;
