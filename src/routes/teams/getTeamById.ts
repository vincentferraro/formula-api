import { Team } from "../../db/models/team";
import { Request, Response, NextFunction } from "express";

export async function getTeamById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    console.log(id);
    if (!id) throw new Error("No id provided");

    const team: Team | null = await Team.findByPk(id);
    if (team === null) throw new Error(`Team with id ${id} not found`);
  } catch (err) {}
}
