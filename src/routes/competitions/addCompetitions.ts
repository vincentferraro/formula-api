import { Competition } from "../../db/models/competition";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function addCompetition(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const input: Competition = req.body;
  Competition.create({
    name: input.name,
  })
    .then((result) => res.status(200).send(successMessage('Competition successfully added',result)))
    .catch((err) => res.send(errorMessage(err)));
}
