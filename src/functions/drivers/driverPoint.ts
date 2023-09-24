import { Driver } from "../../db/models/driver";
import { Course } from "../../db/models/course";
import { Competition } from "../../db/models/competition";
import { Ranking } from "../../db/models/ranking";
import { DriverWithPoints } from "../driverWithPoints";
export async function driverPoints(id: number):Promise<any>{
    try{
        const driver: any | null = await Driver.findByPk(id, {
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
          if (driver === null) throw new Error(`Driver with id ${id} not found`);

          //Calculate driver's points
          const driverWithPoints = await DriverWithPoints(driver)
          return driverWithPoints
    }catch(err){
        return err
    }
    
}