"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addCompetition = void 0;
const competition_1 = require("../../db/models/competition");
const messageResponse_1 = require("../../functions/messageResponse");
async function addCompetition(req, res, next) {
    const input = req.body;
    competition_1.Competition.create({
        name: input.name,
    })
        .then((result) => res.status(200).send((0, messageResponse_1.successMessage)('Competition added successfully', result)))
        .catch((err) => res.send((0, messageResponse_1.errorMessage)(err)));
}
exports.addCompetition = addCompetition;
