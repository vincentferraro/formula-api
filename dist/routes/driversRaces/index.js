"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addDriversRaces_1 = require("./addDriversRaces");
const getDriversRaces_1 = require("./getDriversRaces");
const updateDriversRaces_1 = require("./updateDriversRaces");
const deleteDriversRaces_1 = require("./deleteDriversRaces");
const getRacesByDriverId_1 = require("./getRacesByDriverId");
const router = (0, express_1.Router)();
// DriverRaces routes
router.post("/", addDriversRaces_1.addDriversRaces);
router.get("/", getDriversRaces_1.getDriversRaces);
router.get("/driver_id/:id", getRacesByDriverId_1.getDriversRacesByDriverId);
router.put("/:id", updateDriversRaces_1.updateDriversRaces);
router.delete("/:id", deleteDriversRaces_1.deleteDriversRaces);
exports.default = router;
