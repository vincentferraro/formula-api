"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDriversRaces = void 0;
const driversRaces_1 = require("../../db/models/driversRaces");
const messageResponse_1 = require("../../functions/messageResponse");
async function addDriversRaces(req, res, next) {
    try {
        const input = req.body;
        if (Object.keys(input).length === 0)
            throw new Error(" Missing input");
        const driversRaces = await driversRaces_1.DriversRaces.create({
            DriverId: input?.DriverId,
            RaceId: input?.RaceId,
            rank: input?.rank,
        });
        res
            .status(200)
            .json((0, messageResponse_1.successMessage)("DriversRaces added successfully", driversRaces));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.addDriversRaces = addDriversRaces;
