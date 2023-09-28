"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorMessage = exports.successMessage = void 0;
function successMessage(message, obj) {
    return {
        status: 'SUCCESS',
        message: message,
        data: obj,
    };
}
exports.successMessage = successMessage;
function errorMessage(err) {
    return {
        status: 'ERROR',
        message: err.message,
    };
}
exports.errorMessage = errorMessage;
