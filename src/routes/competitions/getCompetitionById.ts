import { Competition } from "../../db/models/competition";
import { Request, Response, NextFunction } from "express";
import { errorMessage, successMessage } from "../../functions/messageResponse";
export async function getCompetitionById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (!id) {
      throw new Error("No id provided");
    }
    const competition = await Competition.findByPk(id) as Competition;
    if(competition === null)  throw new Error(`Competition with id ${id} not found`);
    res.status(200).json(successMessage('Competition successfully displayed',competition));
  } catch (err: any) {
    res.status(400).json(errorMessage(err))
  }
}
