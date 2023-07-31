import { DriversCourses } from "../../db/models/driversCourses";
import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function deleteDriversCourses(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  try {
    const id: number = parseInt(req.params.id);
    if (typeof id !== "number") throw new Error("No id provided");
    const driversCourses: DriversCourses | null = await DriversCourses.findByPk(
      id
    );
    if (driversCourses === null)
      throw new Error(`DriversCourses with id ${id} not found`);
    await driversCourses.destroy();
    res.status(204).json(successMessage("DriversCourses successfully removed"));
  } catch (err: any) {
    res.status(400).json(errorMessage(err));
  }
}
