import { Request, Response, NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";
import { Team } from "../../db/models/team";
import { Driver } from "../../db/models/driver";
import { TeamDrivers } from "../../*";
export async function getTeamPointById(req: Request, res: Response, next: NextFunction): Promise <void> {
    try{
        const id: number = parseInt(req.params.id)

        // Typing need

        const team = await Team.findByPk(id,{
            include: Driver
        })
        if (team === null) throw new Error(`Team with id ${id} not found`);
        res.status(200).json(successMessage('Team with Drivers successfully displayed',team))
    }catch(err){
        res.status(400).json(errorMessage(err))
    }
}