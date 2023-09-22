import { Driver } from "../../db/models/driver";
import { Course } from "../../db/models/course";
import { Ranking } from "../../db/models/ranking";
import { Competition } from "../../db/models/competition";
import { Request, Response, NextFunction } from "express";
import { DriverWithPoints } from "../../functions/driverWithPoints";
import { DriverPoints } from "../../*";

export async function getDriversPoints(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
        const driversPoints : Array<DriverPoints> = []
        const drivers: Array<Driver> | null = await Driver.findAll({
            include: {
              model: Course,
              include: [
                {
                  model: Competition,
                  include: [{ model: Ranking }],
                },
              ],
            },
          });
        
          for(const driver of drivers){
            const driverWithPoints : any= await DriverWithPoints(driver)
            driversPoints.push(driverWithPoints)
          }
          res.status(200).json(driversPoints)
    }catch(err){
        res.status(400).json(err)
    }
}