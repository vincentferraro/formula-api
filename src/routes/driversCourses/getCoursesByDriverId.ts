import { DriversCourses } from "../../db/models/driversCourses";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function getDriversCoursesByDriverId(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (typeof id !== "number") throw new Error("No id provided");
    const driversCourses: Array<DriversCourses> | null =
      await DriversCourses.findAll({
        where: {
          DriverId: id,
        },
      });
    if (driversCourses === null)
      throw new Error(`Driver with id ${id} not found`);
    res
      .status(200)
      .json(
        successMessage(
          `DriversCourses successfully found with DriverId ${id}`,
          driversCourses
        )
      );
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
