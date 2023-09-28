"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postSignIn = void 0;
const user_1 = require("../../db/models/user");
// import { decryptPassword } from "../../functions/password";
const bcrypt_1 = __importDefault(require("bcrypt"));
const token_1 = require("../../functions/token");
const messageResponse_1 = require("../../functions/messageResponse");
async function postSignIn(req, res, next) {
    try {
        const input = req.body;
        if (input.username === null && input.password === null)
            throw new Error(`No username and password provided`);
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
        const token = (0, token_1.generateToken)(user);
        user.token = token;
        await user.save();
        res.status(200).json({
            message: "Connection OK",
            username: user.username,
            token: user.token,
        });
    }
    catch (err) {
        res.status(400).json((0, messageResponse_1.errorMessage)(err));
    }
}
exports.postSignIn = postSignIn;
