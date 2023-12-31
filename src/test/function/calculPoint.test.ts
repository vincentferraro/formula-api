import { expect, test } from "vitest";
import { dbConnection } from "../../db";
import { calculPoints } from "../../functions/calculPoints";
import { Ranking } from "../../db/models/ranking";
import { Race } from "../../db/models/race";
import { Driver } from "../../db/models/driver";
import { Competition } from "../../db/models/competition";

test( " test CalculPoints function", async()=>{
let rankingArray: any
let driver: any | null
    try{
        await dbConnection()
        rankingArray = await Ranking.findAll()
        driver = await Driver.findByPk(1, {
            include: {
              model: Race,
              include: [
                {
                  model: Competition,
                  include: [{ model: Ranking }],
                },
              ],
            },
          });
    }catch(err){
        console.log(err)
    }

    expect(await calculPoints(rankingArray,driver.Races)).toEqual(expect.any(Number))

})