import { Driver } from "../db/models/driver";
import { Ranking } from "../db/models/ranking";
import { DriversCourses } from "../db/models/driversCourses";
import { Course } from "../db/models/course";
export async function calculPoints(
  rankings: Array<Ranking>,
  courses: Array<any>
): Promise<number> {
  let sumPoint = 0;
  for (const course of courses) {

    // TO DO: IMPROVING LINE 13, TRY TO CALL DRIVERCOURSE DIRECTLY WITHOUT PASSED BY COURSE MODEL
    let rank: number = course.DriversCourses.rank;
    let ranking = rankings.find((r) => r.rank === rank);
    if (ranking !== undefined) {
      sumPoint += ranking.point;
    }
  }
  console.log(sumPoint)
  return sumPoint;
}
