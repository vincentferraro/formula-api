import { DriversRaces } from "../../db/models/driversRaces";
import { Request, Response, NextFunction } from "express";
import { errorMessage, successMessage } from "../../functions/messageResponse";
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
    res.status(200).json(successMessage(`DriversRaces with id ${id} removed successfully`));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
