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
        allowNull:false
      },
      year: {
        field: "year",
        type: DataTypes.INTEGER,
        allowNull:false
      },
      round: {
        field: "round",
        type: DataTypes.INTEGER,
        allowNull:false
      },
      circuitId: {
        field: "circuit_id",
        type: DataTypes.INTEGER,
        allowNull:false
      },
      competitionId: {
        field: "competition_id",
        type: DataTypes.INTEGER,
        allowNull:false
      },
    },
    {
      sequelize,
      tableName: "races",
      timestamps: false,
    }
  );
}
