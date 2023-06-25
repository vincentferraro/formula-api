import { Competition } from "../../db/models/competition";
import { Request, Response, NextFunction } from "express";

export async function getCompetitions(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const competition = await Competition.findAll();
    res.status(200).json(competition);
  } catch (err) {
    res.status(400).send("ERROR");
  }
}
