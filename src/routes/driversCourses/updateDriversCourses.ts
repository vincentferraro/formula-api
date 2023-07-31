import { DriversCourses } from "../../db/models/driversCourses";
import { Request, Response, NextFunction } from "express";

export async function updateDriversCourses(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    const input: DriversCourses = req.body;
    if (typeof id !== "number") throw new Error("No id provided");

    const driverCourses: DriversCourses | null = await DriversCourses.findByPk(
      id
    );
    if (driverCourses === null)
      throw new Error(`DriversCourses with id ${id} not found`);
    await driverCourses.update({ ...input });
    res.status(204).json();
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
