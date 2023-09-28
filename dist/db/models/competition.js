"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeCompetition = exports.Competition = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("../index");
// order of InferAttributes & InferCreationAttributes is important.
class Competition extends sequelize_1.Model {
}
exports.Competition = Competition;
function initializeCompetition() {
    Competition.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false,
        },
    }, {
        sequelize: index_1.sequelize,
        modelName: "competition",
        timestamps: false,
    });
}
exports.initializeCompetition = initializeCompetition;
