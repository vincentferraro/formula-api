import { DriversRaces } from "../../db/models/driversRaces";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function getDriversRacesByDriverId(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (typeof id !== "number") throw new Error("No id provided");
    const driversRaces: Array<DriversRaces> | null =
      await DriversRaces.findAll({
        where: {
          DriverId: id,
        },
      });
    if (driversRaces === null)
      throw new Error(`Driver with id ${id} not found`);
    res
      .status(200)
      .json(
        successMessage(
          `DriversRaces with DriverId ${id} found successfully`,
          driversRaces
        )
      );
  } catch (err: any) {
    res.status(400).json(errorMessage(err.message));
  }
}
