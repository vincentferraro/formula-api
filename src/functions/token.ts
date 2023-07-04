import jsonwebtoken from "jsonwebtoken";
import { User } from "../db/models/user";
const privateKey: string = process.env.PRIVATE_KEY as string;

export function generateToken(input: User): string {
  return jsonwebtoken.sign({ username: input.username }, privateKey);
}
