import { addCircuit } from "./addCircuit";
import { getCircuits } from "./getCircuits";
import { updateCircuit } from "./updateCircuit";
import { deleteCircuit } from "./deleteCircuit";
import { Router } from "express";

const router: Router = Router();

// Circuit Routes

router.post("/", addCircuit);
router.get("/", getCircuits);
router.put("/:id", updateCircuit);
router.delete("/:id", deleteCircuit);

export default router;
