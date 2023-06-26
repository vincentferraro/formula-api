import { Driver } from "../../db/models/driver";
import { Request, Response, NextFunction } from "express";

export async function getDrivers(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const drivers: Array<Driver> = await Driver.findAll();
    res.status(200).json(drivers);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
