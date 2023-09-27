import { Race } from "../../db/models/race";
import { Request, Response, NextFunction } from "express";
import { errorMessage, successMessage } from "../../functions/messageResponse";
export async function addRace(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const input: Race = req.body;
    if (Object.keys(input).length === 0) throw new Error("Missing input");

    const race: Race = await Race.create({
      name: input?.name,
      year: input?.year,
      round: input?.round,
      circuitId: input?.circuitId,
      competitionId: input?.competitionId,
    });
    res.status(200).json(successMessage(`Race added successfully`,race));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
