"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializationRace = exports.Race = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("../index");
class Race extends sequelize_1.Model {
}
exports.Race = Race;
async function initializationRace() {
    Race.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            field: "name",
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        year: {
            field: "year",
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        round: {
            field: "round",
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        circuitId: {
            field: "circuit_id",
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        competitionId: {
            field: "competition_id",
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize: index_1.sequelize,
        tableName: "races",
        timestamps: false,
    });
}
exports.initializationRace = initializationRace;
