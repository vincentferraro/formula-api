"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validToken = exports.generateToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const privateKey = process.env.PRIVATE_KEY;
function generateToken(input) {
    return jsonwebtoken_1.default.sign({
        exp: Math.floor(Date.now()) + 60 * 60 * 24 * 1000,
        username: input.username,
        role: input.role,
    }, privateKey);
}
exports.generateToken = generateToken;
async function validToken(token, req) {
    const tokenDecoded = jsonwebtoken_1.default.verify(token, privateKey);
    if (tokenDecoded.exp === undefined) {
        return { valid: false };
    }
    else if (Date.now() < tokenDecoded.exp &&
        tokenDecoded.username === req.headers.username) {
        return { valid: true, role: tokenDecoded.role };
    }
    else {
        return { valid: false };
    }
}
exports.validToken = validToken;
