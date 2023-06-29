import { User } from "../../db/models/user";
import { Request, Response, NextFunction } from "express";

export async function addUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const input: User = req.body;
    if (typeof input === null) throw new Error(`Missing input`);
    const user = await User.create();
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
