import { Router } from "express";
import { getRaces } from "./getRaces";
import { getRaceById } from "./getRaceById";
import { addRace } from "./addRace";
import { updateRace } from "./updateRace";
import { deleteRace } from "./deleteRace";

const router: Router = Router();

// Race routes

router.get("/", getRaces);
router.get("/:id", getRaceById);
router.post("/", addRace);
router.put("/:id", updateRace);
router.delete("/:id", deleteRace);

export default router;
