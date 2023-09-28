"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializationTeam = exports.Team = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("../index");
class Team extends sequelize_1.Model {
}
exports.Team = Team;
function initializationTeam() {
    Team.init({
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
        location: {
            field: "location",
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        competitionId: {
            field: "competition_id",
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
    }, {
        sequelize: index_1.sequelize,
        modelName: "team",
        timestamps: false,
    });
}
exports.initializationTeam = initializationTeam;
