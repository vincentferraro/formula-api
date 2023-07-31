import { DriversCourses } from "../../db/models/driversCourses";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function getDriversCourses(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const driversCourses: Array<DriversCourses> =
      await DriversCourses.findAll();
    res
      .status(200)
      .json(
        successMessage("DriversCourses successfully found", driversCourses)
      );
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
