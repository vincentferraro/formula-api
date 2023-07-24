import { User } from "../../db/models/user";
import { Request, Response, NextFunction } from "express";
import { generatePassword } from "../../functions/password";
import { generateToken } from "../../functions/token";
export async function addUser(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const input: User = req.body;

    if (typeof input === null) throw new Error(`Missing input`);
    const token: string = generateToken(input);
    const user: User | null = await User.findOne({
      where: {
        username: input.username,
      },
    });
    if (user !== null) throw new Error(`Username already exist`);
    const newUser = await User.create({
      username: input.username,
      password: input.password,
      token,
    });
    generatePassword(input.password, newUser);
    res.status(200).json({
      message: "User Created",
      data: newUser,
    });
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
