import { User } from "../../db/models/user";
import { Request, Response, NextFunction } from "express";
// import { decryptPassword } from "../../functions/password";
import bcrypt from "bcrypt";
import { generateToken } from "../../functions/token";
export async function postSignIn(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const input: User = req.body;
    if (input.username === null && input.password === null)
      throw new Error(`No username and password provided`);
    const user = await User.findOne({
      where: {
        username: input.username,
      },
    });
    if (user === null) throw new Error(`Username not found`);
    const passwordDecrypted: Boolean = await bcrypt.compare(
      input.password,
      user.password
    );
    if (passwordDecrypted === false) throw new Error(`Password error`);
    const token: string = generateToken(user);
    user.token = token;
    await user.save();
    res.status(200).json({
      message: "Connection OK",
      username: user.username,
      token: user.token,
    });
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
