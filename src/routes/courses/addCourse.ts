import { Course } from "../../db/models/course";
import { Request, Response, NextFunction } from "express";

export async function addCourse(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const input: Course = req.body;
    if (Object.keys(input).length === 0) throw new Error("Missing input");

    const course: Course = await Course.create({
      name: input?.name,
      year: input?.year,
      round: input?.round,
      circuitId: input?.circuitId,
      competitionId: input?.competitionId,
    });
    res.status(200).json(course);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
