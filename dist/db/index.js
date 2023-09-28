"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbConnection = exports.sequelize = void 0;
require("dotenv").config();
const sequelize_1 = require("sequelize");
const competition_1 = require("./models/competition");
const team_1 = require("./models/team");
const circuit_1 = require("./models/circuit");
const driver_1 = require("./models/driver");
const race_1 = require("./models/race");
const user_1 = require("./models/user");
const ranking_1 = require("./models/ranking");
const driversRaces_1 = require("./models/driversRaces");
const DB_NAME = process.env.DB_NAME;
const DB_USERNAME = process.env.DB_USERNAME;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_HOST = process.env.DB_HOST;
const DB_PORT = process.env.DB_PORT;
const DB_DIALECT = process.env.DB_DIALECT;
exports.sequelize = new sequelize_1.Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
    host: DB_HOST,
    dialect: DB_DIALECT,
    port: parseInt(DB_PORT),
});
async function Association() {
    team_1.Team.hasMany(driver_1.Driver, {
        sourceKey: "id",
        foreignKey: "teamId",
    });
    driver_1.Driver.belongsTo(team_1.Team, {
        targetKey: "id",
        foreignKey: "teamId",
    });
    competition_1.Competition.hasMany(team_1.Team, {
        sourceKey: "id",
        foreignKey: "competitionId",
    });
    team_1.Team.belongsTo(competition_1.Competition, {
        targetKey: "id",
        foreignKey: "competitionId",
    });
    competition_1.Competition.hasMany(ranking_1.Ranking, {
        sourceKey: "id",
        foreignKey: "competitionId",
    });
    ranking_1.Ranking.belongsTo(competition_1.Competition, {
        targetKey: "id",
        foreignKey: "competitionId",
    });
    driver_1.Driver.belongsToMany(race_1.Race, { through: driversRaces_1.DriversRaces });
    race_1.Race.belongsToMany(driver_1.Driver, { through: driversRaces_1.DriversRaces });
    competition_1.Competition.hasMany(race_1.Race, {
        sourceKey: "id",
        foreignKey: "competitionId",
    });
    race_1.Race.belongsTo(competition_1.Competition, {
        targetKey: "id",
        foreignKey: "competitionId",
    });
}
async function dbConnection() {
    try {
        await exports.sequelize.authenticate();
        console.log("Connection has been established successfully.");
        (0, competition_1.initializeCompetition)();
        competition_1.Competition.sync();
        (0, team_1.initializationTeam)();
        team_1.Team.sync();
        (0, circuit_1.initializationCircuit)();
        circuit_1.Circuit.sync();
        (0, driver_1.initializationDriver)();
        driver_1.Driver.sync();
        (0, race_1.initializationRace)();
        race_1.Race.sync();
        (0, user_1.initializationUser)();
        user_1.User.sync();
        (0, ranking_1.initializationRanking)();
        ranking_1.Ranking.sync();
        (0, driversRaces_1.initializationDriversRaces)();
        driversRaces_1.DriversRaces.sync();
        Association();
    }
    catch (error) {
        console.error("Unable to connect to the database:", error);
    }
}
exports.dbConnection = dbConnection;
