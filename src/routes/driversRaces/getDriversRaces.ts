import { DriversRaces } from "../../db/models/driversRaces";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function getDriversRaces(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const driversRaces: Array<DriversRaces> =
      await DriversRaces.findAll();
    res
      .status(200)
      .json(
        successMessage("DriversRaces found successfully", driversRaces)
      );
  } catch (err: any) {
    res.status(400).json(errorMessage(err.message));
  }
}
