"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.teamPoint = void 0;
const driverPoint_1 = require("../drivers/driverPoint");
const team_1 = require("../../db/models/team");
const driver_1 = require("../../db/models/driver");
const sum_1 = require("../sum");
async function teamPoint(id) {
    try {
        // variable declaration
        const driversPointsArray = [];
        // STEP 1 : get Team with Drivers
        const team = await team_1.Team.findByPk(id, {
            include: driver_1.Driver
        });
        if (team === null)
            throw new Error(`Team with id ${id} not found`);
        //STEP 2: Calcul Drivers points
        for (const driver of team.Drivers) {
            const driverPointsresult = await (0, driverPoint_1.driverPoints)(driver.id);
            driversPointsArray.push(driverPointsresult);
        }
        //STEP 3: Sum Drivers points and return the result
        if (driversPointsArray.length > 2)
            throw new Error(`Error during the process, contact an administrator`);
        const teamPoints = await (0, sum_1.sumPoint)(driversPointsArray[0].points, driversPointsArray[1].points);
        return {
            id: team.id,
            name: team.name,
            location: team.location,
            competitionId: team.competitionId,
            points: teamPoints
        };
    }
    catch (err) {
        return err;
    }
}
exports.teamPoint = teamPoint;
