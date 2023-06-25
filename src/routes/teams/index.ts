import { addTeam } from "./addTeam";
import { Router } from "express";

const router: Router = Router();
// TEAM ROUTES

router.post("/", addTeam);

export default router;
