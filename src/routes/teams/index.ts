import { addTeam } from "./addTeam";
import { getTeamById } from "./getTeamById";
import { getTeams } from "./getTeams";
import { updateTeam } from "./updateTeams";
import { deleteTeam } from "./deleteTeam";
import { Router } from "express";
import { getTeamsDriver } from "./getTeamsDrivers";
import { getTeamByIdPoints } from "./getTeamByIdPoints";

const router: Router = Router();
// TEAM ROUTES

// POST
router.post("/", addTeam);

// GET
router.get("/:id", getTeamById);
router.get("/", getTeams);
router.get("/:id/points", getTeamByIdPoints)
router.get("/drivers", getTeamsDriver);

// PUT
router.put("/:id", updateTeam);

// DELETE
router.delete("/:id", deleteTeam);

export default router;
