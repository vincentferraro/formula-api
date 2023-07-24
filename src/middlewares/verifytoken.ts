import { Request, Response, NextFunction } from "express";
import { validToken } from "../functions/token";
export async function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    if (req.path === "/users/signin" || req.path === "/users/") {
      res.locals.signin = true;
      console.log("ici");
      next();
    } else {
      console.log("ici2");
      const token: string = req.headers.authorization as string;
      if (token === undefined) throw new Error(`token not provided`);
      if (req.headers.username === undefined)
        throw new Error(`username not provided`);
      const ok = await validToken(token.substring(7), req);
      res.locals.role = ok.role;
      next();
    }
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
