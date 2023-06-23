import { addCompetition } from "./addCompetitions";
import { getCompetitions } from "./getCompetitions";
import { getCompetitionById } from "./getCompetitionById";
import { Router } from "express";
// COMPETITION ROUTES
const router: Router = Router();
router.post("/", addCompetition);
router.get("/", getCompetitions);
router.get("/:id", getCompetitionById);

export default router;
