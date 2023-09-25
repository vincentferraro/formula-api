import { expect, test } from "vitest";
import { dbConnection } from "../../../db";
import { teamStandings } from "../../../functions/teams/teamStandings";

test("test teamStanding function", async()=>{

    try{
        await dbConnection()
    }catch(err){
        console.log(err)
    }

    expect(await teamStandings()).toEqual(expect.arrayContaining([
        expect.objectContaining({
            id: expect.any(Number),
            name: expect.any(String),
            location: expect.any(String),
            competitionId: expect.any(Number),
            points: expect.any(Number)
        })
    ]))
})