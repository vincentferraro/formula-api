import { IsNull } from "sequelize-typescript";
import { Competition } from "../../db/models/competition";
import { Request, Response, NextFunction } from "express";
import { errorMessage } from "../../functions/messageResponse";
export async function deleteCompetition(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const id: number = parseInt(req.params.id);
  if (!req.params.id) {
    throw new Error("id missing");
  }
  try {
    const competition: Competition | null = await Competition.findByPk(id);
    if (competition == null) {
      throw new Error(`Competition with id ${id} not found`);
    }

    await competition.destroy();
    res.status(204).send();
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
