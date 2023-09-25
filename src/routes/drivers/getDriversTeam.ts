import { Driver } from "../../db/models/driver";
import { Request, Response, NextFunction } from "express";
import { Team } from "../../db/models/team";
export async function getDriversTeam(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const drivers = await Driver.findAll({
      include: Team,
    });
    res.status(200).json(drivers);
  } catch (err) {
    res.status(400).json(err);
  }
}
