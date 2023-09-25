import { Competition } from "../../db/models/competition";
import { Request, Response, NextFunction } from "express";

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
    
    res.status(204).json()
  } catch (err:any) {
    res.status(400).json(err.message)
  }
}
