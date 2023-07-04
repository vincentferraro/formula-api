import { User } from "../../db/models/user";
import { Request, Response, NextFunction } from "express";
import { generatePassword } from "../../functions/password";
export async function addUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const input: User = req.body;

    if (typeof input === null) throw new Error(`Missing input`);
    const user = await User.create({
      username: input.username,
      password: input.password,
      token: "tokentest",
    });
    generatePassword(input.password, user);
    res.status(200).json({
      message: "User Created",
      data: user,
    });
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
