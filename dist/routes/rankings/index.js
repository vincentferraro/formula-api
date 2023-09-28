"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const addRanking_1 = require("./addRanking");
const getRankings_1 = require("./getRankings");
const updateRanking_1 = require("./updateRanking");
const deleteRanking_1 = require("./deleteRanking");
const getRankingByCompetitionId_1 = require("./getRankingByCompetitionId");
const router = (0, express_1.Router)();
// Ranking Routes
router.post("/", addRanking_1.addRanking);
router.get("/", getRankings_1.getRankings);
router.get("/competition/:id", getRankingByCompetitionId_1.getRankingByCompetitionID);
router.put("/:id", updateRanking_1.updateRanking);
router.delete("/:id", deleteRanking_1.deleteRanking);
exports.default = router;
