import bcrypt from "bcrypt";
import { User } from "../db/models/user";
const salt: number = 10;

export function generatePassword(password: string, user: User): void {
  bcrypt.hash(password, salt, (err, hash) => {
    user.set({
      password: hash,
    });
    user.save();
  });
}
