import { expect, test } from "vitest";
import { dbConnection } from "../../db";
import { Driver } from "../../db/models/driver";
import { DriverWithPoints } from "../../functions/driverWithPoints";
import { Competition } from "../../db/models/competition";
import { Ranking } from "../../db/models/ranking";
import { Course } from "../../db/models/course";

test("test driverWithPoints function", async()=>{

    let driverResult : Driver|null
    // Preparation before test
    try{
        await dbConnection()
        driverResult = await Driver.findByPk(1,{
            include: {
              model: Course,
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
    // @ts-ignore
    expect(await DriverWithPoints(driverResult)).toEqual(expect.objectContaining(
        {
            id: expect.any(Number),
            firstName: expect.any(String),
            lastName: expect.any(String),
            number:expect.any(Number),
            points: expect.any(Number),
            teamId: expect.any(Number)
        }
    ))
})