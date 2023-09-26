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
      switch(req.method){
        case 'PUT':
          if(req.path === "/users/password/"){
            next();
          }
          break;
        case 'GET':
          if(req.path.includes("/users/")){
            res.status(403).json("access forbidden, you must be ADMIN to have access");
          }else{
            next();
          }
          break;
        default:
            res.status(403).json("Access denied, verify the following parameters: TOKEN, USERNAME, PASSWORD, PERMISSIONS (ADMIN OR READER)");
      }
      
      
    } else {
      res.status(403).json("Access denied, verify the following parameters: TOKEN, USERNAME, PASSWORD, PERMISSIONS (ADMIN OR READER)");
    }
  }
}
