import { Race } from "../../db/models/race";
import { Request, Response, NextFunction } from "express";

export async function updateRace(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    const input: Race = req.body;
    if (typeof id !== "number") throw new Error("No id provided");

    const race: Race | null = await Race.findByPk(id);
    if (race === null) throw new Error(`Race with id ${id} not found`);
    await race.update({ ...input });
    res.status(204).json();
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
