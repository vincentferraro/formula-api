import { Request, Response, NextFunction } from "express";
import { Ranking } from "../../db/models/ranking";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function addRanking(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const input: Ranking = req.body;
    if (Object.keys(input).length === 0) throw new Error(" Missing input");
    const ranking = await Ranking.create({
      rank: input?.rank,
      point: input?.point,
      competitionId: input?.competitionId,
    });
    res.status(200).json(successMessage("Ranking successfully added", ranking));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
