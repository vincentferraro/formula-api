import { User } from "../../db/models/user";
import { Request, Response, NextFunction } from "express";
import { errorMessage, successMessage } from "../../functions/messageResponse";
export async function getUserById(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (typeof id !== "number") throw new Error("No id provided");
    const user: User | null = await User.findByPk(id);
    if (user === null) throw new Error(`User with id ${id} not found`);
    res.status(200).json(successMessage(`User found successfully`,user));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
