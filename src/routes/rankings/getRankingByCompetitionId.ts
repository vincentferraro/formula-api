import { Ranking } from "../../db/models/ranking";
import { Request,Response,NextFunction } from "express";
import { successMessage, errorMessage } from "../../functions/messageResponse";

export async function getRankingByCompetitionID(req: Request, res: Response, next: NextFunction): Promise<void> {

    try{
        const id : number = parseInt(req.params.id)
        const rankings : Array<Ranking> = await Ranking.findAll({
            where:{
                competitionId:id
            }
        })
        if (rankings.length === 0) throw new Error(`Rankings not available because Competition with id ${id} not found`);
        res.status(200).json(rankings)
    }catch(err){
        res.status(400).json(errorMessage(err))
    }

}