import { Course } from "../../db/models/course";
import { Request, Response, NextFunction } from "express";

export async function getCourses(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const courses: Array<Course> = await Course.findAll();
    res.status(200).json(courses);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
}
