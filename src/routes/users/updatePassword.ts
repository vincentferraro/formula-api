import { User } from "../../db/models/user";
import { Request, Response, NextFunction } from "express";
import { UserNewPassword } from "../../interfaces/userPassword";
import { generatePassword } from "../../functions/password";
import bcrypt from "bcrypt";
export async function updatePassword(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const input: UserNewPassword = req.body;
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
    generatePassword(input.newPassword, user);

    res.status(200).json({
      message: `password has been successfully changed`,
    });
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
