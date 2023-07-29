import { addTeam } from "./addTeam";
import { getTeamById } from "./getTeamById";
import { getTeams } from "./getTeams";
import { updateTeam } from "./updateTeams";
import { deleteTeam } from "./deleteTeam";
import { Router } from "express";
import { getTeamsDriver } from "./getTeamsDrivers";

const router: Router = Router();
// TEAM ROUTES

router.post("/", addTeam);
router.get("/:id", getTeamById);
router.get("/", getTeams);
router.get("/drivers", getTeamsDriver);
router.put("/:id", updateTeam);
router.delete("/:id", deleteTeam);

export default router;
