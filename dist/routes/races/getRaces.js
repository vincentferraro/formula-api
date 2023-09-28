"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRaces = void 0;
const race_1 = require("../../db/models/race");
const messageResponse_1 = require("../../functions/messageResponse");
async function getRaces(req, res, next) {
    try {
        const races = await race_1.Race.findAll();
        res.status(200).json((0, messageResponse_1.successMessage)(`Races found successfully`, races));
    }
    catch (err) {
        res.status(400).send((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getRaces = getRaces;
