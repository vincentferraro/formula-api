"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializationUser = exports.User = void 0;
const sequelize_1 = require("sequelize");
const index_1 = require("../index");
class User extends sequelize_1.Model {
}
exports.User = User;
async function initializationUser() {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            field: "username",
            type: sequelize_1.DataTypes.TEXT,
            unique: true,
            allowNull: false
        },
        password: {
            field: "password",
            type: sequelize_1.DataTypes.TEXT,
            allowNull: false
        },
        token: {
            field: "token",
            type: sequelize_1.DataTypes.TEXT,
        },
        role: {
            field: "role",
            type: sequelize_1.DataTypes.ENUM,
            values: ["ADMIN", "READER"],
            defaultValue: "READER",
        },
    }, {
        sequelize: index_1.sequelize,
        tableName: "users",
        timestamps: false,
    });
}
exports.initializationUser = initializationUser;
