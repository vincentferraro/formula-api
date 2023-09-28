"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getRaces_1 = require("./getRaces");
const getRaceById_1 = require("./getRaceById");
const addRace_1 = require("./addRace");
const updateRace_1 = require("./updateRace");
const deleteRace_1 = require("./deleteRace");
const router = (0, express_1.Router)();
// Race routes
router.get("/", getRaces_1.getRaces);
router.get("/:id", getRaceById_1.getRaceById);
router.post("/", addRace_1.addRace);
router.put("/:id", updateRace_1.updateRace);
router.delete("/:id", deleteRace_1.deleteRace);
exports.default = router;
