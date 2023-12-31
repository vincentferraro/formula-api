import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Optional,
} from "sequelize";
import { sequelize } from "../index";

export class User extends Model<
  InferAttributes<User>,
  InferCreationAttributes<User>
> {
  declare id: CreationOptional<number>;
  declare username: string;
  declare password: string;
  declare token: string;
  declare role?: string;
}

export async function initializationUser(): Promise<void> {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        field: "username",
        type: DataTypes.TEXT,
        unique: true,
        allowNull:false
      },
      password: {
        field: "password",
        type: DataTypes.TEXT,
        allowNull:false
      },
      token: {
        field: "token",
        type: DataTypes.TEXT,
      },
      role: {
        field: "role",
        type: DataTypes.ENUM,
        values: ["ADMIN", "READER"],
        defaultValue: "READER",
      },
    },
    {
      sequelize,
      tableName: "users",
      timestamps: false,
    }
  );
}
