import { Driver } from "../../db/models/driver";
import { Request, Response, NextFunction } from "express";
import { DriversCourses } from "../../db/models/driversCourses";
import { Ranking } from "../../db/models/ranking";
import { Course } from "../../db/models/course";
import { Competition } from "../../db/models/competition";
import { calculPoint } from "../../functions/calculRank";
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
    const result: number = await calculPoint(
      driver.Courses[0].competition.Rankings,
      driver.Courses
    );
    if (driver === null) throw new Error(`Driver with id ${id} not found`);
    res.status(200).json(driver);
    // res.status(204).json(driver);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
