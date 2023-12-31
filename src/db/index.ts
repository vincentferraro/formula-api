require("dotenv").config();
import { Dialect, Sequelize } from "sequelize";
import { Competition, initializeCompetition } from "./models/competition";
import { Team, initializationTeam } from "./models/team";
import { Circuit, initializationCircuit } from "./models/circuit";
import { Driver, initializationDriver } from "./models/driver";
import { Race, initializationRace } from "./models/race";
import { User, initializationUser } from "./models/user";
import { Ranking, initializationRanking } from "./models/ranking";
import {
  DriversRaces,
  initializationDriversRaces,
} from "./models/driversRaces";

const DB_NAME: string = process.env.DB_NAME as string;
const DB_USERNAME: string = process.env.DB_USERNAME as string;
const DB_PASSWORD: string = process.env.DB_PASSWORD as string;
const DB_HOST: string = process.env.DB_HOST as string;
const DB_PORT: string = process.env.DB_PORT as string;
const DB_DIALECT: Dialect = process.env.DB_DIALECT as Dialect;

export const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: DB_DIALECT,
  port: parseInt(DB_PORT),
});

async function Association() {
  Team.hasMany(Driver, {
    sourceKey: "id",
    foreignKey: "teamId",
  });
  Driver.belongsTo(Team, {
    targetKey: "id",
    foreignKey: "teamId",
  });
  Competition.hasMany(Team, {
    sourceKey: "id",
    foreignKey: "competitionId",
  });
  Team.belongsTo(Competition, {
    targetKey: "id",
    foreignKey: "competitionId",
  });
  Competition.hasMany(Ranking, {
    sourceKey: "id",
    foreignKey: "competitionId",
  });
  Ranking.belongsTo(Competition, {
    targetKey: "id",
    foreignKey: "competitionId",
  });
  Driver.belongsToMany(Race, { through: DriversRaces });
  Race.belongsToMany(Driver, { through: DriversRaces });
  Competition.hasMany(Race, {
    sourceKey: "id",
    foreignKey: "competitionId",
  });
  Race.belongsTo(Competition, {
    targetKey: "id",
    foreignKey: "competitionId",
  });
}
export async function dbConnection(): Promise<void> {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    initializeCompetition();
    Competition.sync();
    initializationTeam();
    Team.sync();
    initializationCircuit();
    Circuit.sync();
    initializationDriver();
    Driver.sync();
    initializationRace();
    Race.sync();
    initializationUser();
    User.sync();
    initializationRanking();
    Ranking.sync();
    initializationDriversRaces();
    DriversRaces.sync();
    Association();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
