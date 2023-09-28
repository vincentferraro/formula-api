"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCircuit = void 0;
const circuit_1 = require("../../db/models/circuit");
const messageResponse_1 = require("../../functions/messageResponse");
async function updateCircuit(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        const updateCircuit = req.body;
        if (typeof id !== "number")
            throw new Error("No id provided");
        const circuit = await circuit_1.Circuit.findByPk(id);
        if (circuit === null)
            throw new Error(`Circuit with id ${id} not found`);
        await circuit.update({ ...updateCircuit });
        res.status(200).json((0, messageResponse_1.successMessage)(`Circuit with id ${circuit.id} updated successfully `, circuit));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.updateCircuit = updateCircuit;
