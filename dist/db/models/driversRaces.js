"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializationDriversRaces = exports.DriversRaces = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("../index");
const driver_1 = require("./driver");
const race_1 = require("./race");
class DriversRaces extends sequelize_1.Model {
}
exports.DriversRaces = DriversRaces;
async function initializationDriversRaces() {
    DriversRaces.init({
        id: {
            field: "id",
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        DriverId: {
            field: "driver_id",
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: driver_1.Driver,
                key: "id",
            },
            allowNull: false
        },
        RaceId: {
            field: "race_id",
            type: sequelize_1.DataTypes.INTEGER,
            references: {
                model: race_1.Race,
                key: "id",
            },
            allowNull: false
        },
        rank: {
            field: "rank",
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize: index_1.sequelize,
        tableName: "drivers_races",
        timestamps: false,
    });
}
exports.initializationDriversRaces = initializationDriversRaces;
