import { Course } from "../db/models/course";
import { Driver } from "../db/models/driver";
import { Ranking } from "../db/models/ranking";
import { calculPoint } from "./calculRank";

// TO DO: Resole this typing issues for the DriverWithPoints function

// interface DriverCourses extends Driver{
//     Courses : Array<CourseCompetition>
// }
// interface CourseCompetition extends Course {
//     competition: Array<Ranking>
// }
// interface Rankings extends Array<Ranking>{
//     Rankings : Array<T>
// }

export async function DriverWithPoints(driver: any):Promise<any>{
    const points: number = await calculPoint(
        driver.Courses[0].competition.Rankings,
        driver.Courses
      );
      
      
      const driverWithPoints = {
        id: driver.id,
        firstName: driver.firstName,
        lastName: driver.lastName,
        number:driver.number,
        teamId: driver.teamId,
        points: points
      }

      return driverWithPoints
}