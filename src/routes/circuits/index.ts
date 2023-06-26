import { addCircuit } from "./addCircuit";
import { getCircuits } from "./getCircuits";
import { updateCircuit } from "./updateCircuit";
import { deleteCircuit } from "./deleteCircuit";
import { getCircuitById } from "./getCircuitById";
import { Router } from "express";

const router: Router = Router();

// Circuit Routes

router.post("/", addCircuit);
router.get("/", getCircuits);
router.get("/:id", getCircuitById);
router.put("/:id", updateCircuit);
router.delete("/:id", deleteCircuit);

export default router;
