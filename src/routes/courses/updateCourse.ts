import { Course } from "../../db/models/course";
import { Request, Response, NextFunction } from "express";

export async function updateCourse(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    const input: Course = req.body;
    if (typeof id !== "number") throw new Error("No id provided");

    const course: Course | null = await Course.findByPk(id);
    if (course === null) throw new Error(`Course with id ${id} not found`);
    await course.update({ ...input });
    res.status(204).json();
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
