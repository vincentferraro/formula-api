import { Race } from "../db/models/race";
import { Driver } from "../db/models/driver";
import { Ranking } from "../db/models/ranking";
import { calculPoints } from "./calculPoints";

// TO DO: Resole this typing issues for the DriverWithPoints function

// interface DriverRaces extends Driver{
//     Races : Array<RaceCompetition>
// }
// interface RaceCompetition extends Race {
//     competition: Array<Ranking>
// }
// interface Rankings extends Array<Ranking>{
//     Rankings : Array<T>
// }

export async function DriverWithPoints(driver: any):Promise<any>{
    const points: number = await calculPoints(
        driver.Races[0].competition.Rankings,
        driver.Races
      );
      
      
      const driverWithPoints = {
        id: driver.id,
        firstName: driver.firstName,
        lastName: driver.lastName,
        number:driver.number,
        teamId: driver.teamId,
        points: points
      }

      return driverWithPoints
}