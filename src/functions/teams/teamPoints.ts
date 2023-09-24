import { driverPoints } from "../drivers/driverPoint";
import { Team } from "../../db/models/team";
import { Driver } from "../../db/models/driver";
import { sumPoint } from "../sum";
import { DriverPoints } from "../../*";


type TeamPoint = {
    id: number,
    name: string,
    location: string,
    competitionId: string,
    points: number
}
interface TeamDrivers extends Team{
    Drivers : Array<Driver>
}
export async function teamPoint(id: any):Promise<TeamPoint| any>{

    try{
        // variable declaration
        const driversPointsArray : Array<DriverPoints> = []
        // STEP 1 : get Team with Drivers
        const team:TeamDrivers| null = await Team.findByPk(id, {
            include: Driver
        }) as TeamDrivers
        if (team === null) throw new Error(`Team with id ${id} not found`);
        //STEP 2: Calcul Drivers points
        for(const driver of team.Drivers ){
            const driverPointsresult = await driverPoints(driver.id)
            driversPointsArray.push(driverPointsresult)
        }

        //STEP 3: Sum Drivers points and return the result
        if(driversPointsArray.length>2) throw new Error(`Error during the process, contact an administrator`)
        const teamPoints = await sumPoint(driversPointsArray[0].points,driversPointsArray[1].points)
        
        return {
            id: team.id,
            name: team.name,
            location: team.location,
            competitionId: team.competitionId,
            points: teamPoints
        }
    }catch(err){
        return err
    }
}