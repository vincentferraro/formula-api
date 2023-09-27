import { User } from "../../db/models/user";
import { Request, Response, NextFunction } from "express";
import { UserNewPassword } from "../../interfaces/userPassword";
import { generatePassword } from "../../functions/password";
import bcrypt from "bcrypt";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function updatePassword(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const input: UserNewPassword = req.body;
    if (input.username === null && input.password === null)
      throw new Error(`No username and password provided`);
    //Verify if user has right to change password from other users
    if(res.locals.role === "READER"){
      if(req.headers.username !== input.username) throw new Error(`Username header and body are not the same`);
    }
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

    res.status(200).json(successMessage(`password updated successfully`));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
