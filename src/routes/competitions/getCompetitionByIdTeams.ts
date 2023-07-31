import { Competition } from "../../db/models/competition";
import { Request, Response, NextFunction } from "express";
import { Team } from "../../db/models/team";

export async function getCompetitionByIdTeams(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (!id) {
      throw new Error("NO ID");
    }
    const competition = await Competition.findByPk(id, {
      include: Team,
    });
    res.status(200).json(competition);
  } catch (err) {
    next(err);
  }
}
