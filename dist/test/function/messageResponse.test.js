"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const messageResponse_1 = require("../../functions/messageResponse");
const db_1 = require("../../db");
const driver_1 = require("../../db/models/driver");
(0, vitest_1.test)("test Message Response function", async () => {
    // FIRST FUNCTION, SUCCESS MESSAGE
    try {
        await (0, db_1.dbConnection)();
        var driver = await driver_1.Driver.findByPk(1);
    }
    catch (err) {
        console.log(err);
    }
    // @ts-ignore
    (0, vitest_1.expect)((0, messageResponse_1.successMessage)("Is a success", driver)).toEqual(vitest_1.expect.objectContaining({
        message: vitest_1.expect.any(String),
        data: vitest_1.expect.any(Object)
    }));
    // SECOND FUNTION, ERROR MESSAGE
    let err = new Error("It's an error");
    (0, vitest_1.expect)((0, messageResponse_1.errorMessage)(err)).toEqual(vitest_1.expect.objectContaining({
        message: vitest_1.expect.any(String)
    }));
});
