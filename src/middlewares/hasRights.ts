import { Request, Response, NextFunction } from "express";

// const readerRoutes = [
//   "/circuits/",
//   "/circuit/:id",
//   "/competitions/",
//   "/competitions/:id",
//   "/races/",
//   "/races/:id",
//   "/drivers/",
//   "/drivers/:id",
//   "/teams/",
//   "/teams/:id",
// ];

export async function hasRights(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  if (res.locals.signin) {
    next();
  } else {
    if (res.locals.role === "ADMIN") {
      next();
    } else if (res.locals.role === "READER") {
      if (req.method === "GET") {
        next();
      } else {
        res.status(403).json("access forbidden");
      }
    } else {
      res.status(403).json("access forbidden");
    }
  }
}
