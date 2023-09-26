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
  declare teamId: number;
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
        allowNull:false
      },
      lastName: {
        field: "last_name",
        type: DataTypes.TEXT,
        allowNull:false
      },
      number: {
        field: "number",
        type: DataTypes.INTEGER,
        allowNull:false
      },
      teamId: {
        field: "team_id",
        type: DataTypes.INTEGER,
        allowNull:false
      },
    },
    {
      sequelize,
      tableName: "drivers",
      timestamps: false,
    }
  );
}
