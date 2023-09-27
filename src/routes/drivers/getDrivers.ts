import { Driver } from "../../db/models/driver";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";

export async function getDrivers(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const drivers: Array<Driver> = await Driver.findAll();
    res.status(200).json(successMessage(`Drivers found successfully`,drivers));
  } catch (err: any) {
    res.status(400).json(errorMessage(err.message));
  }
}
