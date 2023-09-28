"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDriver = void 0;
const driver_1 = require("../../db/models/driver");
const messageResponse_1 = require("../../functions/messageResponse");
async function addDriver(req, res, next) {
    try {
        const input = req.body;
        if (Object.keys(input).length === 0)
            throw new Error(" Missing input");
        const driver = await driver_1.Driver.create({
            lastName: input?.lastName,
            firstName: input?.firstName,
            number: input?.number,
            teamId: input?.teamId,
        });
        res.status(200).json((0, messageResponse_1.successMessage)(`Driver added successfully`, driver));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.addDriver = addDriver;
