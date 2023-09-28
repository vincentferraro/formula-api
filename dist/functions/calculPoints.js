"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculPoints = void 0;
async function calculPoints(rankings, races) {
    let sumPoint = 0;
    for (const race of races) {
        // TO DO: IMPROVING LINE 13, TRY TO CALL DRIVERCOURSE DIRECTLY WITHOUT PASSED BY COURSE MODEL
        let rank = race.DriversRaces.rank;
        let ranking = rankings.find((r) => r.rank === rank);
        if (ranking !== undefined) {
            sumPoint += ranking.point;
        }
    }
    return sumPoint;
}
exports.calculPoints = calculPoints;
