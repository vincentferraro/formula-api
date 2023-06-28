import { Driver } from "../../db/models/driver";
import { Request, Response, NextFunction } from "express";

export async function deleteDriver(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (typeof id !== "number") throw new Error("No id provided");
    const driver: Driver | null = await Driver.findByPk(id);
    if (driver === null) throw new Error(`Driver with id ${id} not found`);
    await driver.destroy();
    res.status(204).json();
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}