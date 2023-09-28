"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCircuit = void 0;
const circuit_1 = require("../../db/models/circuit");
const messageResponse_1 = require("../../functions/messageResponse");
async function addCircuit(req, res, next) {
    try {
        const input = req.body;
        if (Object.keys(input).length === 0)
            throw new Error("Missing input");
        const circuit = await circuit_1.Circuit.create({
            name: input?.name,
            location: input?.location,
            length: input?.length,
        });
        res.status(200).json((0, messageResponse_1.successMessage)('Circuit added successfully', circuit));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.addCircuit = addCircuit;
