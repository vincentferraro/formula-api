import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "../index";

export class Race extends Model<
  InferAttributes<Race>,
  InferCreationAttributes<Race>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare year: string;
  declare circuitId: string;
  declare competitionId: string;
  declare round: string;
}

export async function initializationRace(): Promise<void> {
  Race.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        field: "name",
        type: DataTypes.TEXT,
      },
      year: {
        field: "year",
        type: DataTypes.INTEGER,
      },
      round: {
        field: "round",
        type: DataTypes.INTEGER,
      },
      circuitId: {
        field: "circuit_id",
        type: DataTypes.INTEGER,
      },
      competitionId: {
        field: "competition_id",
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "races",
      timestamps: false,
    }
  );
}
