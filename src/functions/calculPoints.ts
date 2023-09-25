import { Driver } from "../db/models/driver";
import { Ranking } from "../db/models/ranking";
import { DriversRaces } from "../db/models/driversRaces";
import { Race } from "../db/models/race";
export async function calculPoints(
  rankings: Array<Ranking>,
  races: Array<any>
): Promise<number> {
  let sumPoint = 0;
  for (const race of races) {

    // TO DO: IMPROVING LINE 13, TRY TO CALL DRIVERCOURSE DIRECTLY WITHOUT PASSED BY COURSE MODEL
    let rank: number = race.DriversRaces.rank;
    let ranking = rankings.find((r) => r.rank === rank);
    if (ranking !== undefined) {
      sumPoint += ranking.point;
    }
  }
  console.log(sumPoint)
  return sumPoint;
}
