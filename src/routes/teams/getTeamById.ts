import { Team } from "../../db/models/team";
import { Request, Response, NextFunction } from "express";

export async function getTeamById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    
    if (typeof id !== "number") throw new Error("No id provided");

    const team: Team | null = await Team.findByPk(id);
    if (team === null) throw new Error(`Team with id ${id} not found`);
    res.status(200).json(team);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
