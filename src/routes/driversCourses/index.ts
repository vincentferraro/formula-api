import { Router } from "express";
import { addDriversCourses } from "./addDriversCourses";

const router: Router = Router();

// DriverCourses routes

router.post("/", addDriversCourses);

export default router;
