import { IsNull } from "sequelize-typescript";
import { Competition } from "../../db/models/competition";
import { Request, Response, NextFunction } from "express";

export async function deleteCompetition(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const id: number = parseInt(req.params.id);
  if (!req.params.id) {
    throw new Error("id missing");
  }

  const competition: Competition | null = await Competition.findByPk(id);
  if (!competition) throw new Error("NO");
  const dest = await competition.destroy();
  console.log("dest", dest);
}
