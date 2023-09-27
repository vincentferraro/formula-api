import { Team } from "../../db/models/team";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function getTeams(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const teams: Array<Team> = await Team.findAll();
    res.status(200).json(successMessage(`Teams found successfully`,teams));
  } catch (err: any) {
    res.status(400).send(errorMessage(err));
  }
}
