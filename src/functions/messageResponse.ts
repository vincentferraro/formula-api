import { Driver } from "../db/models/driver";
import { Circuit } from "../db/models/circuit";
import { Competition } from "../db/models/competition";
import { Course } from "../db/models/course";
import { Ranking } from "../db/models/ranking";
import { Team } from "../db/models/team";
import { User } from "../db/models/user";
import { DriversCourses } from "../db/models/driversCourses";

interface objectResponse<T> {
  message: string;
  data?: T;
}
interface ErrorResponse {
  message: string;
}

export function successMessage(
  message: string,
  obj?:
    | Driver
    | Circuit
    | Competition
    | Course
    | Ranking
    | Array<Ranking>
    | Team
    | User
    | DriversCourses
): objectResponse<
  | Driver
  | Circuit
  | Competition
  | Course
  | Ranking
  | Array<Ranking>
  | Team
  | User
  | DriversCourses
> {
  return {
    message: message,
    data: obj,
  };
}

export function errorMessage(err: any): ErrorResponse {
  return {
    message: err.message,
  };
}
