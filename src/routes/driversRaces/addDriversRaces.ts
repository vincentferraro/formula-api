import { DriversRaces } from "../../db/models/driversRaces";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function addDriversRaces(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const input: DriversRaces = req.body;
    if (Object.keys(input).length === 0) throw new Error(" Missing input");
    const driversRaces: DriversRaces = await DriversRaces.create({
      DriverId: input?.DriverId,
      RaceId: input?.RaceId,
      rank: input?.rank,
    });
    res
      .status(200)
      .json(
        successMessage("DriversRaces added successfully", driversRaces)
      );
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
