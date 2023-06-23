import { Competition } from "../../db/models/competition";
import { Request, Response, NextFunction } from "express";

export async function getCompetitions(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  console.log(!req.params);
  if (req.params) {
  }
  res.status(400).send("ERROR");
}
