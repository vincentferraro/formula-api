import { Request,Response, NextFunction } from "express";
import { Driver } from "../../db/models/driver";
import { Course } from "../../db/models/course";
import { Competition } from "../../db/models/competition";
import { Ranking } from "../../db/models/ranking";
import { DriverWithPoints } from "../../functions/driverWithPoints";
import { DriverPoints } from "../../*";
import { displayStanding } from "../../functions/displayStanding";
import { successMessage, errorMessage } from "../../functions/messageResponse";
export async function getDriversRanking(req: Request, res: Response, next: NextFunction):Promise<void>{

    try{
        const driversPoints : Array<DriverPoints> = []
        // STEP 1: Find Drivers
        const drivers : Array<Driver> = await Driver.findAll(
            {
                include: {
                  model: Course,
                  include: [
                    {
                      model: Competition,
                      include: [{ model: Ranking }],
                    },
                  ],
                },
              }
        )
        // STEP 2: Calculate Driver's Point
        for(const driver of drivers){
            const driverWithPoints : any= await DriverWithPoints(driver)
            driversPoints.push(driverWithPoints)
          }

        // STEP 3: Sort Drivers for create the ranking

        const ranking: Array<DriverPoints>  = await displayStanding(driversPoints, true)

        res.status(200).json(successMessage("Ranking successfully displayed",ranking))

    }catch(err){
        res.status(400).json(errorMessage(err))
    }
}