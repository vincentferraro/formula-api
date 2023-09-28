"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const driverPoint_1 = require("../../../functions/drivers/driverPoint");
const vitest_1 = require("vitest");
const db_1 = require("../../../db");
(0, vitest_1.test)("test driverPoint function", async () => {
    try {
        await (0, db_1.dbConnection)();
    }
    catch (err) {
        console.log(err);
    }
    (0, vitest_1.expect)(await (0, driverPoint_1.driverPoints)(2)).toEqual(vitest_1.expect.objectContaining({
        id: vitest_1.expect.any(Number),
        firstName: vitest_1.expect.any(String),
        lastName: vitest_1.expect.any(String),
        number: vitest_1.expect.any(Number),
        points: vitest_1.expect.any(Number),
        teamId: vitest_1.expect.any(Number)
    }));
});
