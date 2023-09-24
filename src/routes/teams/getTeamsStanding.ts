import { Request, Response, NextFunction } from "express";
import { teamStanding } from "../../functions/teams/teamStanding";
import { errorMessage, successMessage } from "../../functions/messageResponse";
export async function getTeamsStanding(req: Request, res: Response, next: NextFunction): Promise<void>{
    try{
        console.log("hhello")
        const result = await teamStanding()
        if(result instanceof Error) throw Error(result.message)
        res.status(200).json(successMessage("Standing successfully displayed", result))
    }catch(err){
        res.status(400).json(errorMessage(err))
    }
}