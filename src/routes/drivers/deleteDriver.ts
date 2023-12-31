import { Driver } from "../../db/models/driver";
import { Request, Response, NextFunction } from "express";
import { errorMessage, successMessage } from "../../functions/messageResponse";
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
    res.status(200).json(successMessage(`Driver with id ${id} removed successfully`));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
