import { Driver } from "../../db/models/driver";
import { Request, Response, NextFunction } from "express";
import { Team } from "../../db/models/team";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function getDriversTeam(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const drivers = await Driver.findAll({
      include: Team,
    });
    res.status(200).json(successMessage(`Drivers with Team found successfully`,drivers));
  } catch (err: any) {
    res.status(400).json(errorMessage(err.message));
  }
}
