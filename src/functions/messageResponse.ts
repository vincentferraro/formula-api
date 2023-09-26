import { Driver } from "../db/models/driver";
import { Circuit } from "../db/models/circuit";
import { Competition } from "../db/models/competition";
import { Race } from "../db/models/race";
import { Ranking } from "../db/models/ranking";
import { Team } from "../db/models/team";
import { User } from "../db/models/user";
import { DriversRaces } from "../db/models/driversRaces";
import { DriverPoints } from "../*";

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
    |Array<Circuit>
    | Race
    | Ranking
    | Competition
    | Array<Competition>
    | Array<Ranking>
    | Team
    | User
    | DriversRaces
    | Array<DriversRaces>
    |Array<DriverPoints>
): objectResponse<
  | Driver
  | Circuit
  |Array<Circuit>
  | Competition
  | Array<Competition>
  | Race
  | Ranking
  | Array<Ranking>
  | Team
  | User
  | DriversRaces
  | Array<DriversRaces>
  |Array<DriverPoints>
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
