import { Race } from "../../db/models/race";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function getRaces(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const races: Array<Race> = await Race.findAll();
    res.status(200).json(successMessage(`Races found successfully`,races));
  } catch (err: any) {
    res.status(400).send(errorMessage(err));
  }
}
