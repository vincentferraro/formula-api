import { Team } from "../../db/models/team";
import { Request, Response, NextFunction } from "express";
import { Driver } from "../../db/models/driver";

export async function getTeamsDriver(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const teams = await Team.findAll({
      include: Driver,
    });
    console.log(teams);
    res.status(200).json(teams);
  } catch (err) {
    res.status(400).json(err);
  }
}
