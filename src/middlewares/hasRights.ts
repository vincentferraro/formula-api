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

// Verify that the user has permission to access the requested route
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
        if(req.path === "/users/"){
          res.status(403).json("access forbidden, you must be ADMIN to have access");
        }else{
          next();
        }
        
      } else {
        res.status(403).json("access forbidden, you must be ADMIN to have access");
      }
    } else {
      res.status(403).json("access forbidden");
    }
  }
}
