import { DriversCourses } from "../../db/models/driversCourses";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function addDriversCourses(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const input: DriversCourses = req.body;
    if (Object.keys(input).length === 0) throw new Error(" Missing input");
    const driversCourses: DriversCourses = await DriversCourses.create({
      driverId: input?.driverId,
      courseId: input?.courseId,
      rank: input?.rank,
    });
    console.log(driversCourses);
    res
      .status(200)
      .json(
        successMessage("DriversCourses successfully added", driversCourses)
      );
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
