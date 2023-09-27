import { Team } from "../../db/models/team";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function addTeam(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const input: Team = req.body;
    if (Object.keys(input).length === 0) throw new Error(" Missing input");

    const team: Team = await Team.create({
      name: input?.name,
      location: input?.location,
      competitionId: input?.competitionId,
    });
    res.status(200).json(successMessage(`Team added successfully`,team));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
