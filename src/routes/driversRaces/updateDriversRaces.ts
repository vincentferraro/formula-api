import { DriversRaces } from "../../db/models/driversRaces";
import { Request, Response, NextFunction } from "express";
import { errorMessage, successMessage } from "../../functions/messageResponse";
export async function updateDriversRaces(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    const input: DriversRaces = req.body;
    if (typeof id !== "number") throw new Error("No id provided");

    const driverRaces: DriversRaces | null = await DriversRaces.findByPk(
      id
    );
    if (driverRaces === null)
      throw new Error(`DriversRaces with id ${id} not found`);
    await driverRaces.update({ ...input });
    res.status(200).json(successMessage(`DriversRace with id ${id} updated successfully`, driverRaces));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
