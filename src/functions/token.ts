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
      exp: Math.floor(Date.now()) + 60 * 60 * 24 * 1000,
      username: input.username,
      role: "READER",
    },
    privateKey
  );
}

interface tokenResponse {
  valid: boolean;
  role?: string;
}

export async function validToken(
  token: string,
  req: Request
): Promise<tokenResponse> {
  const tokenDecoded: jsonwebtoken.JwtPayload = jsonwebtoken.verify(
    token,
    privateKey
  ) as jsonwebtoken.JwtPayload;
  if (tokenDecoded.exp === undefined) {
    return { valid: false };
  } else if (
    Date.now() < tokenDecoded.exp &&
    tokenDecoded.username === req.headers.username
  ) {
    return { valid: true, role: tokenDecoded.role };
  } else {
    return { valid: false };
  }

  // if (tokenDecoded.exp !== undefined) {
  //   if (
  //     Date.now() < tokenDecoded.exp &&
  //     tokenDecoded.username === req.headers.username
  //   ) {
  //     console.log(tokenDecoded);
  //     return {
  //       valid: true,
  //       role: tokenDecoded.role,
  //     };
  //   } else {
  //     return {
  //       valid: false,
  //     };
  //   }
  // } else {
  //   return {
  //     valid: false,
  //   };
  // }
}
