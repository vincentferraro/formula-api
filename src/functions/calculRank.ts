import { Driver } from "../db/models/driver";
import { Ranking } from "../db/models/ranking";
import { DriversCourses } from "../db/models/driversCourses";
import { Course } from "../db/models/course";
export async function calculPoint(
  rankings: Array<Ranking>,
  courses: Array<any>
): Promise<number> {
  let sumPoint = 0;
  for (const course of courses) {
    let rank: number = course.DriversCourses.rank;
    let ranking = rankings.find((r) => r.rank === rank);
    if (ranking !== undefined) {
      sumPoint += ranking.point;
    }
  }
  return sumPoint;
}
