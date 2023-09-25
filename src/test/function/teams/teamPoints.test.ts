import { test, expect } from "vitest";
import { dbConnection } from "../../../db";
import { teamPoint } from "../../../functions/teams/teamPoints";
test("test TeamPoints function", async ()=>{
    try{
        await dbConnection()
    }catch(err){
        console.log(err)
    }

    expect(await teamPoint(1)).toEqual(expect.objectContaining({
        id: expect.any(Number),
        name: expect.any(String),
        location: expect.any(String),
        competitionId: expect.any(Number),
        points: expect.any(Number)
    }))
})