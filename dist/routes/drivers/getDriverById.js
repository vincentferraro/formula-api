"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDriverById = void 0;
const driver_1 = require("../../db/models/driver");
const messageResponse_1 = require("../../functions/messageResponse");
async function getDriverById(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        if (typeof id !== "number")
            throw new Error("No id provided");
        const driver = await driver_1.Driver.findByPk(id);
        if (driver === null)
            throw new Error(`Driver with id ${id} not found`);
        res.status(200).json((0, messageResponse_1.successMessage)(`Driver with id ${driver.id} found successfully`, driver));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getDriverById = getDriverById;
