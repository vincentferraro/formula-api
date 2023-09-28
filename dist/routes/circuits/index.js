"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const addCircuit_1 = require("./addCircuit");
const getCircuits_1 = require("./getCircuits");
const updateCircuit_1 = require("./updateCircuit");
const deleteCircuit_1 = require("./deleteCircuit");
const getCircuitById_1 = require("./getCircuitById");
const express_1 = require("express");
const router = (0, express_1.Router)();
// Circuit Routes
router.post("/", addCircuit_1.addCircuit);
router.get("/", getCircuits_1.getCircuits);
router.get("/:id", getCircuitById_1.getCircuitById);
router.put("/:id", updateCircuit_1.updateCircuit);
router.delete("/:id", deleteCircuit_1.deleteCircuit);
exports.default = router;
