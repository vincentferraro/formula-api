import { Driver } from "../../db/models/driver";
import { Request, Response, NextFunction } from "express";
import { Team } from "../../db/models/team";

export async function getDriverByIdTeam(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (typeof id !== "number") throw new Error("No id provided");
    const driver: Driver | null = await Driver.findByPk(id, {
      include: Team,
    });
    if (driver === null) throw new Error(`Driver with id ${id} not found`);
    res.status(200).json(driver);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
