import { Team } from "../../db/models/team"
import { TeamPoint } from "../../*";
import { teamPoint } from "./teamPoints";
import { displayStandings } from "../displayStandings";

export async function teamStandings():Promise<Array<TeamPoint>|any>{
    try{
        console.log("hhello 2")
        const teamsArray: Array<TeamPoint> = []
        const teams : Array<Team> = await Team.findAll()

        for(const team of teams){
            const teamPointResult = await teamPoint(team.id)
            if(teamPointResult instanceof Error) throw Error(teamPointResult.message)
            teamsArray.push(teamPointResult)
        }
        const standings = await displayStandings(teamsArray, true) as Array<TeamPoint>

        return standings
    }catch(err){
        return err
    }
}