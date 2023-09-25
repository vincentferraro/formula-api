import { afterAll, beforeAll, expect, test } from "vitest";
import { Team, initializationTeam } from "../../../db/models/team";
import { dbConnection, sequelize } from "../../../db";
test("test GetTeams",async ()=>{

    try{
        await dbConnection()
        // console.log("connection OK")
        // initializationTeam()
        const team = await Team.findAll()
    }catch(err){
        console.log(err)
    }
})