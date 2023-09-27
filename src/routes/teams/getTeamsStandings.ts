import { Request, Response, NextFunction } from "express";
import { teamStandings } from "../../functions/teams/teamStandings";
import { errorMessage, successMessage } from "../../functions/messageResponse";
export async function getTeamsStandings(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
        const result = await teamStandings()
        if(result instanceof Error) throw result
        res.status(200).json(successMessage("Teams Standing found successfully", result))
    }catch(err){
        res.status(400).json(errorMessage(err))
    }
}