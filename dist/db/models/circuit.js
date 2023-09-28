"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializationCircuit = exports.Circuit = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("../index");
class Circuit extends sequelize_1.Model {
}
exports.Circuit = Circuit;
function initializationCircuit() {
    Circuit.init({
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
            field: "localisation",
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        length: {
            field: "length",
            type: sequelize_1.DataTypes.FLOAT,
        },
    }, {
        sequelize: index_1.sequelize,
        modelName: "circuit",
        timestamps: false,
    });
}
exports.initializationCircuit = initializationCircuit;
