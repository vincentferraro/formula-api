"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePassword = void 0;
const user_1 = require("../../db/models/user");
const password_1 = require("../../functions/password");
const bcrypt_1 = __importDefault(require("bcrypt"));
const messageResponse_1 = require("../../functions/messageResponse");
async function updatePassword(req, res, next) {
    try {
        const input = req.body;
        if (input.username === null && input.password === null)
            throw new Error(`No username and password provided`);
        //Verify if user has right to change password from other users
        if (res.locals.role === "READER") {
            if (req.headers.username !== input.username)
                throw new Error(`Username header and body are not the same`);
        }
        const user = await user_1.User.findOne({
            where: {
                username: input.username,
            },
        });
        if (user === null)
            throw new Error(`Username not found`);
        const passwordDecrypted = await bcrypt_1.default.compare(input.password, user.password);
        if (passwordDecrypted === false)
            throw new Error(`Password error`);
        (0, password_1.generatePassword)(input.newPassword, user);
        res.status(200).json((0, messageResponse_1.successMessage)(`password updated successfully`));
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.updatePassword = updatePassword;
