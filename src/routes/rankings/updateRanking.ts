import { Ranking } from "../../db/models/ranking";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function updateRanking(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    const input: Ranking = req.body;
    if (typeof id !== "number") throw new Error("No id provided");

    const ranking: Ranking | null = await Ranking.findByPk(id);
    if (ranking === null) throw new Error(`Ranking with id ${id} not found`);
    await ranking.update({ ...input });
    res.status(204).json(successMessage("Ranking successfully updated"));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
