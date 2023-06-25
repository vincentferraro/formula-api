import { Circuit } from "../../db/models/circuit";
import { Request, Response, NextFunction } from "express";

export async function getCircuits(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const circuits: Array<Circuit> = await Circuit.findAll();
    res.status(200).json(circuits);
  } catch (err: any) {
    res.status(400).send(err.message);
  }
}
