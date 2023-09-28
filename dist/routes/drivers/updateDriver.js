"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDriver = void 0;
const driver_1 = require("../../db/models/driver");
const messageResponse_1 = require("../../functions/messageResponse");
async function updateDriver(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const input = req.body;
        if (typeof id !== "number")
            throw new Error("No id provided");
        const driver = await driver_1.Driver.findByPk(id);
        if (driver === null)
            throw new Error(`Driver with id ${id} not found`);
        await driver.update({ ...input });
        res.status(200).json((0, messageResponse_1.successMessage)(`Driver updated successfully`, driver));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.updateDriver = updateDriver;
