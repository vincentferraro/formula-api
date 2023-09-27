import { Request, Response, NextFunction } from "express";
import { driverPoints } from "../../functions/drivers/driverPoint";
import { successMessage, errorMessage } from "../../functions/messageResponse";

export async function getDriverByIdWithPoints(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (typeof id !== "number") throw new Error("No id provided");
    const driverWithPoints = await driverPoints(id)
    if(driverWithPoints instanceof Error) throw driverWithPoints
    res.status(200).json(successMessage(`Driver with points found successfully`,driverWithPoints));
    
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
