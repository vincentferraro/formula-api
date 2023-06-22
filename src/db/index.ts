import { Sequelize } from "sequelize";
import { Competition, initializeCompetition } from "./models/competition";
import { Team, initializationTeam } from "./models/team";
import { Circuit, initializationCircuit } from "./models/circuit";
export const sequelize = new Sequelize("formula-db", "admin", "admin", {
  host: "localhost",
  dialect: "postgres",
  port: 5433,
});

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
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
