import { DriversRaces } from "../../db/models/driversRaces";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function deleteDriversRaces(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (typeof id !== "number") throw new Error("No id provided");
    const driversRaces: DriversRaces | null = await DriversRaces.findByPk(
      id
    );
    if (driversRaces === null)
      throw new Error(`DriversRaces with id ${id} not found`);
    await driversRaces.destroy();
    res.status(204).json(successMessage("DriversRaces successfully removed"));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
