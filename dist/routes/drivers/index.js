"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addDriver_1 = require("./addDriver");
const getDrivers_1 = require("./getDrivers");
const updateDriver_1 = require("./updateDriver");
const deleteDriver_1 = require("./deleteDriver");
const getDriverById_1 = require("./getDriverById");
const getDriversTeam_1 = require("./getDriversTeam");
const getDriverByIdTeam_1 = require("./getDriverByIdTeam");
const getDriverByIdPoint_1 = require("./getDriverByIdPoint");
const getDriversPoints_1 = require("./getDriversPoints");
const getDriversStandings_1 = require("./getDriversStandings");
const router = (0, express_1.Router)();
// Driver Routes
router.post("/", addDriver_1.addDriver);
router.get("/", getDrivers_1.getDrivers);
router.get("/standings", getDriversStandings_1.getDriversStandings);
router.get("/points", getDriversPoints_1.getDriversPoints);
router.get("/team", getDriversTeam_1.getDriversTeam);
router.get("/:id", getDriverById_1.getDriverById);
router.get("/:id/team", getDriverByIdTeam_1.getDriverByIdTeam);
router.get("/:id/points", getDriverByIdPoint_1.getDriverByIdWithPoints);
router.put("/:id", updateDriver_1.updateDriver);
router.delete("/:id", deleteDriver_1.deleteDriver);
exports.default = router;