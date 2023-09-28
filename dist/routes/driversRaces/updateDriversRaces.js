"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDriversRaces = void 0;
const driversRaces_1 = require("../../db/models/driversRaces");
const messageResponse_1 = require("../../functions/messageResponse");
async function updateDriversRaces(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const input = req.body;
        if (typeof id !== "number")
            throw new Error("No id provided");
        const driverRaces = await driversRaces_1.DriversRaces.findByPk(id);
        if (driverRaces === null)
            throw new Error(`DriversRaces with id ${id} not found`);
        await driverRaces.update({ ...input });
        res.status(200).json((0, messageResponse_1.successMessage)(`DriversRace with id ${id} updated successfully`, driverRaces));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.updateDriversRaces = updateDriversRaces;
