import { User } from "../../db/models/user";
import { Request, Response, NextFunction } from "express";

export async function deleteUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (typeof id !== "number") throw new Error("No id provided");
    const user: User | null = await User.findByPk(id);
    if (user === null) throw new Error(`User with id ${id} not found`);
    await user.destroy();
    res.status(204).json();
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
