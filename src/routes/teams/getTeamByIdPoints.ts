import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
// import { Team } from "../../db/models/team";
// import { Driver } from "../../db/models/driver";
// import { TeamDrivers } from "../../*";
import { teamPoint } from "../../functions/teams/teamPoints";


export async function getTeamByIdPoints(req: Request, res: Response, next: NextFunction): Promise <void> {
    try{
        const id: number = parseInt(req.params.id)
        if (typeof id !== "number") throw new Error("No id provided");
        
        const result = await teamPoint(id)
        if(result instanceof Error) throw Error(result.message)
        
        res.status(200).json(successMessage('Team with points successfully displayed',result))
    }catch(err){
        res.status(400).json(errorMessage(err))
    }
}