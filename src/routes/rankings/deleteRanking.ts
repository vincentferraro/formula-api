import { Ranking } from "../../db/models/ranking";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function deleteRanking(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (typeof id !== "number") throw new Error("No id provided");
    const ranking: Ranking | null = await Ranking.findByPk(id);
    if (ranking === null) throw new Error(`Ranking with id ${id} not found`);
    await ranking.destroy();
    res.status(200).json(successMessage(`Ranking with id ${id}removed successfully`));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
