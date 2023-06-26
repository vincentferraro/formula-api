import { Driver } from "../../db/models/driver";
import { Request, Response, NextFunction } from "express";

export async function addDriver(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const input: Driver = req.body;
    if (Object.keys(input).length === 0) throw new Error(" Missing input");
    const driver = await Driver.create({
      lastName: input?.lastName,
      firstName: input?.firstName,
      number: input?.number,
    });
  } catch (err: any) {
    res.status(400).json(err.message);
  }
}
