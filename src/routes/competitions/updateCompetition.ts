import { Competition } from "../../db/models/competition";
import { Request, Response, NextFunction } from "express";

export async function updateCompetition(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    const input: Competition = req.body;
    if (!req.params.id || !req.body) {
      throw new Error("id or invalid body");
    }
    Competition.findByPk(id)
      .then((competition) => competition?.update(input))
      .then((competitionUpdated) => res.status(200).json(competitionUpdated))
      .catch((err) => new Error(err));
  } catch (err) {
    next(err);
  }
}
