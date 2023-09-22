import { Driver } from "../../db/models/driver";
import { Request, Response, NextFunction } from "express";
import { DriversCourses } from "../../db/models/driversCourses";
import { Ranking } from "../../db/models/ranking";
import { Course } from "../../db/models/course";
import { Competition } from "../../db/models/competition";
import { DriverWithPoints } from "../../functions/driverWithPoints";

export async function getDriverByIdWithPoints(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (typeof id !== "number") throw new Error("No id provided");
    const driver: any | null = await Driver.findByPk(id, {
      include: {
        model: Course,
        include: [
          {
            model: Competition,
            include: [{ model: Ranking }],
          },
        ],
      },
    });
    if (driver === null) throw new Error(`Driver with id ${id} not found`);

    console.log(driver)

    //Calculate driver's points
    const driverWithPoints = await DriverWithPoints(driver)

    res.status(200).json(driverWithPoints);
    // res.status(204).json(driver);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
