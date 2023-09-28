"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializationDriver = exports.Driver = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("../index");
class Driver extends sequelize_1.Model {
}
exports.Driver = Driver;
async function initializationDriver() {
    Driver.init({
        id: {
            field: "id",
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        firstName: {
            field: "first_name",
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        lastName: {
            field: "last_name",
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        number: {
            field: "number",
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        teamId: {
            field: "team_id",
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize: index_1.sequelize,
        tableName: "drivers",
        timestamps: false,
    });
}
exports.initializationDriver = initializationDriver;
