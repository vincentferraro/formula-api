import { Competition } from "../../db/models/competition";
import { Request, Response, NextFunction } from "express";

export async function addCompetition(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  console.log(req);
  res.status(200).send("it works");
}
