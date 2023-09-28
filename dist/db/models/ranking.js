"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializationRanking = exports.Ranking = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("../index");
class Ranking extends sequelize_1.Model {
}
exports.Ranking = Ranking;
async function initializationRanking() {
    Ranking.init({
        id: {
            field: "id",
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        rank: {
            field: "rank",
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false
        },
        point: {
            field: "point",
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
        tableName: "rankings",
        timestamps: false,
    });
}
exports.initializationRanking = initializationRanking;
