import { Router } from "express";
import { getCourses } from "./getCourses";
import { getCourseById } from "./getCourseById";
import { addCourse } from "./addCourse";
import { updateCourse } from "./updateCourse";
import { deleteCourse } from "./deleteCourse";

const router: Router = Router();

// Course routes

router.get("/", getCourses);
router.get("/:id", getCourseById);
router.post("/", addCourse);
router.put("/:id", updateCourse);
router.delete("/:id", deleteCourse);

export default router;
