import { Circuit } from "../../db/models/circuit";
import { Request, Response, NextFunction } from "express";
import { errorMessage, successMessage } from "../../functions/messageResponse";
export async function getCircuitById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (typeof id !== "number") throw new Error("No id provided");

    const circuit: Circuit | null = await Circuit.findByPk(id);
    if (circuit === null) throw new Error(`Circuit with id ${id} not found`);
    res.status(200).json(successMessage("Circuit successfully displayed",circuit));
  } catch (err: any) {
    res.status(400).json(errorMessage(err.message));
  }
}
