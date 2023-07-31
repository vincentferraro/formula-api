import { Router } from "express";
import { addDriversCourses } from "./addDriversCourses";
import { getDriversCourses } from "./getDriversCourses";
import { updateDriversCourses } from "./updateDriversCourses";
import { deleteDriversCourses } from "./deleteDriversCourses";
import { getDriversCoursesByDriverId } from "./getCoursesByDriverId";
const router: Router = Router();

// DriverCourses routes

router.post("/", addDriversCourses);
router.get("/", getDriversCourses);
router.get("/driver_id/:id", getDriversCoursesByDriverId);
router.put("/:id", updateDriversCourses);
router.delete("/:id", deleteDriversCourses);

export default router;
