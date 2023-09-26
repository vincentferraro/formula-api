import { Circuit } from "../../db/models/circuit";
import { Request, Response, NextFunction } from "express";
import { errorMessage, successMessage } from "../../functions/messageResponse";
export async function updateCircuit(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    const updateCircuit: Circuit = req.body;

    if (typeof id !== "number") throw new Error("No id provided");

    const circuit: Circuit | null = await Circuit.findByPk(id);
    if (circuit === null) throw new Error(`Team with id ${id} not found`);

    await circuit.update({ ...updateCircuit });

    res.status(200).json(successMessage(`Circuit ${circuit.id} successfully updated`,circuit));

    // TODO : Manage attribute type during INSERTION length must be FLOAT
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
