import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "../index";

export class Driver extends Model<
  InferAttributes<Driver>,
  InferCreationAttributes<Driver>
> {
  declare id: CreationOptional<number>;
  declare firstName: string;
  declare lastName: string;
  declare number: string;
}

export async function initializationDriver(): Promise<void> {
  Driver.init(
    {
      id: {
        field: "id",
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: {
        field: "first_name",
        type: DataTypes.TEXT,
      },
      lastName: {
        field: "last_name",
        type: DataTypes.TEXT,
      },
      number: {
        field: "number",
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "drivers",
    }
  );
}
