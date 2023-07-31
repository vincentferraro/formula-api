import { addCompetition } from "./addCompetitions";
import { getCompetitions } from "./getCompetitions";
import { getCompetitionById } from "./getCompetitionById";
import { updateCompetition } from "./updateCompetition";
import { deleteCompetition } from "./deleteCompetition";
import { getCompetitionByIdTeams } from "./getCompetitionByIdTeams";
import { Router } from "express";
// COMPETITION ROUTES
const router: Router = Router();
router.post("/", addCompetition);
router.get("/", getCompetitions);
router.get("/:id", getCompetitionById);
router.get("/:id/teams", getCompetitionByIdTeams);
router.put("/:id", updateCompetition);
router.delete("/:id", deleteCompetition);

export default router;
