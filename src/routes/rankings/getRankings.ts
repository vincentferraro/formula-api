import { Request, Response, NextFunction } from "express";
import { Ranking } from "../../db/models/ranking";
import { successMessage, errorMessage } from "../../functions/messageResponse";

export async function getRankings(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const ranking: Array<Ranking> = await Ranking.findAll();
    res
      .status(200)
      .json(successMessage("Rankings found successfully", ranking));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
