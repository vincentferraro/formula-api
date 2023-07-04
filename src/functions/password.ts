import bcrypt from "bcrypt";
import { User } from "../db/models/user";
const salt = 10;

export async function generatePassword(
  password: string,
  user: User
): Promise<void> {
  bcrypt.hash(password, salt, (err, hash) => {
    user.set({
      password: hash,
    });
    user.save();
  });
}

export async function decryptPassword(
  password: string,
  user: User
): Promise<void> {
  bcrypt.compare(password, user.password, (err, result) => {
    if (result) {
      console.log("true");
      return true;
    } else {
      console.log("false");
      return false;
    }
  });
}
