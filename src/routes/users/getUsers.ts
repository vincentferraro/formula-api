import { User } from "../../db/models/user";
import { Request, Response, NextFunction } from "express";
import { errorMessage, successMessage } from "../../functions/messageResponse";
export async function getUsers(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const users = await User.findAll();
    res.status(200).json(successMessage(`Users found successfully`,users));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
