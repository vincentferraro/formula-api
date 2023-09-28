"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDriverByIdWithPoints = void 0;
const driverPoint_1 = require("../../functions/drivers/driverPoint");
const messageResponse_1 = require("../../functions/messageResponse");
async function getDriverByIdWithPoints(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        if (typeof id !== "number")
            throw new Error("No id provided");
        const driverWithPoints = await (0, driverPoint_1.driverPoints)(id);
        if (driverWithPoints instanceof Error)
            throw driverWithPoints;
        res.status(200).json((0, messageResponse_1.successMessage)(`Driver with points found successfully`, driverWithPoints));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getDriverByIdWithPoints = getDriverByIdWithPoints;
