"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCircuits = void 0;
const circuit_1 = require("../../db/models/circuit");
const messageResponse_1 = require("../../functions/messageResponse");
async function getCircuits(req, res, next) {
    try {
        const circuits = await circuit_1.Circuit.findAll();
        res.status(200).json((0, messageResponse_1.successMessage)('Circuits found successfully', circuits));
    }
    catch (err) {
        res.status(400).send((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getCircuits = getCircuits;
