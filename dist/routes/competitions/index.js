"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addCompetitions_1 = require("./addCompetitions");
const getCompetitions_1 = require("./getCompetitions");
const getCompetitionById_1 = require("./getCompetitionById");
const updateCompetition_1 = require("./updateCompetition");
const deleteCompetition_1 = require("./deleteCompetition");
const getCompetitionByIdTeams_1 = require("./getCompetitionByIdTeams");
const express_1 = require("express");
// COMPETITION ROUTES
const router = (0, express_1.Router)();
router.post("/", addCompetitions_1.addCompetition);
router.get("/", getCompetitions_1.getCompetitions);
router.get("/:id", getCompetitionById_1.getCompetitionById);
router.get("/:id/teams", getCompetitionByIdTeams_1.getCompetitionByIdTeams);
router.put("/:id", updateCompetition_1.updateCompetition);
router.delete("/:id", deleteCompetition_1.deleteCompetition);
exports.default = router;
