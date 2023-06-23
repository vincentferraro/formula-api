import { Competition } from "../../db/models/competition";
import { Request, Response, NextFunction } from "express";

export async function getCompetitionById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (!id) {
      throw new Error("NO ID");
    }
    const competition = (await Competition.findByPk(id)) as Competition;
    res.status(200).json(competition);
  } catch (err) {
    next(err);
  }
}
