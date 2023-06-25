import { Team } from "../../db/models/team";
import { Request, Response, NextFunction } from "express";

export async function deleteTeam(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    const team: Team | null = await Team.findByPk(id);
    if (team === null) throw new Error(`Team with id ${id} not found`);
    await team.destroy();
    res.status(204).json();
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
