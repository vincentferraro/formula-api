import { Request, Response, NextFunction } from "express";
import { driverPoints } from "../../functions/drivers/driverPoint";

export async function getDriverByIdWithPoints(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (typeof id !== "number") throw new Error("No id provided");
    const driverWithPoints = await driverPoints(id)
    res.status(200).json(driverWithPoints);
    // res.status(204).json(driver);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
