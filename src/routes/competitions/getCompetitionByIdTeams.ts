import { Competition } from "../../db/models/competition";
import { Request, Response, NextFunction } from "express";
import { Team } from "../../db/models/team";
import { successMessage, errorMessage } from "../../functions/messageResponse";
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
    res.status(200).json(successMessage('Competition with Team successfully displayed',competition as Competition));
  } catch (err: any) {
    res.status(400).json(errorMessage(err.message))
  }
}
