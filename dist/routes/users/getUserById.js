"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
const user_1 = require("../../db/models/user");
const messageResponse_1 = require("../../functions/messageResponse");
async function getUserById(req, res, next) {
    try {
        const id = parseInt(req.params.id);
        if (typeof id !== "number")
            throw new Error("No id provided");
        const user = await user_1.User.findByPk(id);
        if (user === null)
            throw new Error(`User with id ${id} not found`);
        res.status(200).json((0, messageResponse_1.successMessage)(`User found successfully`, user));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getUserById = getUserById;
