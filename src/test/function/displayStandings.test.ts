import { expect, test } from "vitest";
import { dbConnection } from "../../db";
import { displayStandings } from "../../functions/displayStandings";
import { DriverPoints } from "../../*";
import { Driver } from "../../db/models/driver";
import { Course } from "../../db/models/course";
import { Competition } from "../../db/models/competition";
import { Ranking } from "../../db/models/ranking";
import { DriverWithPoints } from "../../functions/driverWithPoints";

test("test displayStandings function", async()=>{

    // Preparation before test
    const driversPoints : Array<DriverPoints> = []
    try{
        await dbConnection()
        
        // STEP 1: Find Drivers
        const drivers : Array<Driver> = await Driver.findAll(
            {
                include: {
                  model: Course,
                  include: [
                    {
                      model: Competition,
                      include: [{ model: Ranking }],
                    },
                  ],
                },
              }
        )
        // STEP 2: Calculate Driver's Point
        for(const driver of drivers){
            const driverWithPoints : any= await DriverWithPoints(driver)
            driversPoints.push(driverWithPoints)
          }

    }catch(err){
        console.log(err)
    }

    // Runing test
    expect(await displayStandings(driversPoints,true)).toEqual(expect.arrayContaining([
        expect.objectContaining({
            id: expect.any(Number),
            firstName: expect.any(String),
            lastName: expect.any(String),
            number:expect.any(Number),
            points: expect.any(Number),
            teamId: expect.any(Number),
            ranking: expect.any(Number)
        })
    ]))
})