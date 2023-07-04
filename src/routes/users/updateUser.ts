import { User } from "../../db/models/user";
import { Request, Response, NextFunction } from "express";

export async function updateUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    const updateUser: User = req.body;

    if (typeof id !== "number") throw new Error("No id provided");

    const user: User | null = await User.findByPk(id);
    if (user === null) throw new Error(`User with id ${id} not found`);

    await user.update({ ...updateUser });

    res.status(200).json(user);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
