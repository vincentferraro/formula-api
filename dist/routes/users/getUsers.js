"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const user_1 = require("../../db/models/user");
const messageResponse_1 = require("../../functions/messageResponse");
async function getUsers(req, res, next) {
    try {
        const users = await user_1.User.findAll();
        res.status(200).json((0, messageResponse_1.successMessage)(`Users found successfully`, users));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.getUsers = getUsers;
