"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDrivers = void 0;
const driver_1 = require("../../db/models/driver");
const messageResponse_1 = require("../../functions/messageResponse");
async function getDrivers(req, res, next) {
    try {
        const drivers = await driver_1.Driver.findAll();
        res.status(200).json((0, messageResponse_1.successMessage)(`Drivers found successfully`, drivers));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getDrivers = getDrivers;
