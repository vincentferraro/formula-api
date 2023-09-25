import { driverPoints } from "../../../functions/drivers/driverPoint";
import { test, expect, expectTypeOf} from "vitest";
import {dbConnection } from "../../../db";
test("test driverPoint function", async ()=>{
    try{
        await dbConnection()
    }catch(err){
        console.log(err)
    }
    expect(await driverPoints(2)).toEqual(
        expect.objectContaining({
            id: expect.any(Number),
            firstName: expect.any(String),
            lastName: expect.any(String),
            number:expect.any(Number),
            points: expect.any(Number),
            teamId: expect.any(Number)
        })
    )
})