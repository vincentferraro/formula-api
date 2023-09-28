"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sum_1 = require("../../functions/sum");
const vitest_1 = require("vitest");
(0, vitest_1.test)('test sumPoint function', async () => {
    (0, vitest_1.expect)(await (0, sum_1.sumPoint)(3, 2)).toBe(5);
});
