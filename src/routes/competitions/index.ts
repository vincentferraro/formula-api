import { addCompetition } from "./addCompetitions";
import { getCompetitions } from "./getCompetitions";
import { app } from "../../../app";
import { Router } from "express";
// COMPETITION ROUTES
const router: Router = Router();
router.post("/", addCompetition);
router.get("/", getCompetitions);

export default router;
