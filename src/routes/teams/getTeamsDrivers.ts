import { Team } from "../../db/models/team";
import { Request, Response, NextFunction } from "express";
import { Driver } from "../../db/models/driver";
import { errorMessage, successMessage } from "../../functions/messageResponse";
export async function getTeamsDriver(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const teamsDrivers = await Team.findAll({
      include: Driver,
    });
    
    res.status(200).json(successMessage(`Teams with Drivers found successfully`, teamsDrivers));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
