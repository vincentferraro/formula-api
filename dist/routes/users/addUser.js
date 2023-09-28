"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addUser = void 0;
const user_1 = require("../../db/models/user");
const password_1 = require("../../functions/password");
const token_1 = require("../../functions/token");
const messageResponse_1 = require("../../functions/messageResponse");
async function addUser(req, res, next) {
    try {
        const input = req.body;
        if (typeof input === null)
            throw new Error(`Missing input`);
        const token = (0, token_1.generateToken)(input);
        const user = await user_1.User.findOne({
            where: {
                username: input.username,
            },
        });
        if (user !== null)
            throw new Error(`Username already exist`);
        const newUser = await user_1.User.create({
            username: input.username,
            password: input.password,
            token,
        });
        (0, password_1.generatePassword)(input.password, newUser);
        res.status(200).json((0, messageResponse_1.successMessage)(`User created successfully`, newUser));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.addUser = addUser;
