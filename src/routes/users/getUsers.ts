import { User } from "../../db/models/user";
import { Request, Response, NextFunction } from "express";

export async function getUsers(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
