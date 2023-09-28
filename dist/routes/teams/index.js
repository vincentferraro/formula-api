"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addTeam_1 = require("./addTeam");
const getTeamById_1 = require("./getTeamById");
const getTeams_1 = require("./getTeams");
const updateTeams_1 = require("./updateTeams");
const deleteTeam_1 = require("./deleteTeam");
const express_1 = require("express");
const getTeamsDrivers_1 = require("./getTeamsDrivers");
const getTeamByIdPoints_1 = require("./getTeamByIdPoints");
const getTeamsStandings_1 = require("./getTeamsStandings");
const router = (0, express_1.Router)();
// TEAM ROUTES
// POST
router.post("/", addTeam_1.addTeam);
// GET
router.get("/", getTeams_1.getTeams);
router.get("/standings", getTeamsStandings_1.getTeamsStandings);
router.get("/drivers", getTeamsDrivers_1.getTeamsDriver);
router.get("/:id", getTeamById_1.getTeamById);
router.get("/:id/points", getTeamByIdPoints_1.getTeamByIdPoints);
// PUT
router.put("/:id", updateTeams_1.updateTeam);
// DELETE
router.delete("/:id", deleteTeam_1.deleteTeam);
exports.default = router;
