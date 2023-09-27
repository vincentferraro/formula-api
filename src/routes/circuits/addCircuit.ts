import { Circuit } from "../../db/models/circuit";
import { Request, Response, NextFunction } from "express";
import { errorMessage, successMessage } from "../../functions/messageResponse";
export async function addCircuit(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const input: Circuit = req.body;
    if (Object.keys(input).length === 0) throw new Error("Missing input");
    
    const circuit: Circuit = await Circuit.create({
      name: input?.name,
      location: input?.location,
      length: input?.length,
    });
    res.status(200).json(successMessage('Circuit added successfully',circuit));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
