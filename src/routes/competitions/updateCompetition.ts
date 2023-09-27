import { Competition } from "../../db/models/competition";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";

export async function updateCompetition(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    const input: Competition = req.body;
    if (!req.params.id || !req.body) {
      throw new Error("id or invalid body");
    }
    const competition = await Competition.findByPk(id)
    if(competition === null) throw new Error(`Competition with id ${id} not found`)
    competition?.update(input)
    
    res.status(200).json(successMessage(`Competition with id ${competition.id} updated successfully`, competition))
  } catch (err:any) {
    res.status(400).json(errorMessage(err))
  }
}
