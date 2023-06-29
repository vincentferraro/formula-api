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
      },
      password: {
        field: "password",
        type: DataTypes.TEXT,
      },
      token: {
        field: "token",
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      tableName: "users",
    }
  );
}
