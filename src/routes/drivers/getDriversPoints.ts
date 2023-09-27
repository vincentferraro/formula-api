import { Driver } from "../../db/models/driver";
import { Race } from "../../db/models/race";
import { Ranking } from "../../db/models/ranking";
import { Competition } from "../../db/models/competition";
import { Request, Response, NextFunction } from "express";
import { DriverWithPoints } from "../../functions/driverWithPoints";
import { DriverPoints } from "../../*";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function getDriversPoints(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
        const driversPoints : Array<DriverPoints> = []
        const drivers: Array<Driver> | null = await Driver.findAll({
            include: {
              model: Race,
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
          res.status(200).json(successMessage(`Drivers with Points found successfully`,driversPoints))
    }catch(err: any){
        res.status(400).json(errorMessage(err.message))
    }
}