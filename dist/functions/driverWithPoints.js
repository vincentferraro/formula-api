"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DriverWithPoints = void 0;
const calculPoints_1 = require("./calculPoints");
// TO DO: Resole this typing issues for the DriverWithPoints function
// interface DriverRaces extends Driver{
//     Races : Array<RaceCompetition>
// }
// interface RaceCompetition extends Race {
//     competition: Array<Ranking>
// }
// interface Rankings extends Array<Ranking>{
//     Rankings : Array<T>
// }
async function DriverWithPoints(driver) {
    const points = await (0, calculPoints_1.calculPoints)(driver.Races[0].competition.Rankings, driver.Races);
    const driverWithPoints = {
        id: driver.id,
        firstName: driver.firstName,
        lastName: driver.lastName,
        number: driver.number,
        teamId: driver.teamId,
        points: points
    };
    return driverWithPoints;
}
exports.DriverWithPoints = DriverWithPoints;
