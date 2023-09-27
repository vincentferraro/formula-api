import { Circuit } from "../../db/models/circuit";
import { Request, Response, NextFunction } from "express";
import { errorMessage, successMessage } from "../../functions/messageResponse";

export async function getCircuits(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const circuits: Array<Circuit> = await Circuit.findAll();
    res.status(200).json(successMessage('Circuits found successfully',circuits));
  } catch (err: any) {
    res.status(400).send(errorMessage(err));
  }
}
