import jsonwebtoken from "jsonwebtoken";
import { User } from "../db/models/user";
import { Request } from "express";
const privateKey: string = process.env.PRIVATE_KEY as string;

interface token {
  exp: number;
  username: string;
  iat: number;
}

export function generateToken(input: User): string {
  return jsonwebtoken.sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24,
      username: input.username,
    },
    privateKey
  );
}

export async function verifyToken(
  token: string,
  req: Request
): Promise<Boolean> {
  const tokenDecoded: jsonwebtoken.JwtPayload = jsonwebtoken.verify(
    token,
    privateKey
  ) as jsonwebtoken.JwtPayload;
  if (tokenDecoded.exp !== undefined) {
    if (
      Date.now() < tokenDecoded.exp &&
      tokenDecoded.username === req.headers.username
    ) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

// function getToken(user: User): Promise<Boolean> {}
