"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDriversRaces = void 0;
const driversRaces_1 = require("../../db/models/driversRaces");
const messageResponse_1 = require("../../functions/messageResponse");
async function deleteDriversRaces(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        if (typeof id !== "number")
            throw new Error("No id provided");
        const driversRaces = await driversRaces_1.DriversRaces.findByPk(id);
        if (driversRaces === null)
            throw new Error(`DriversRaces with id ${id} not found`);
        await driversRaces.destroy();
        res.status(200).json((0, messageResponse_1.successMessage)(`DriversRaces with id ${id} removed successfully`));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.deleteDriversRaces = deleteDriversRaces;
