import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "../index";
import { Driver } from "./driver";
import { Race } from "./race";

export class DriversRaces extends Model<
  InferAttributes<DriversRaces>,
  InferCreationAttributes<DriversRaces>
> {
  declare id: CreationOptional<number>;
  declare DriverId: number;
  declare RaceId: number;
  declare rank: number;
}

export async function initializationDriversRaces(): Promise<void> {
  DriversRaces.init(
    {
      id: {
        field: "id",
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      DriverId: {
        field: "driver_id",
        type: DataTypes.INTEGER,
        references: {
          model: Driver,
          key: "id",
        },
        allowNull:false
      },
      RaceId: {
        field: "race_id",
        type: DataTypes.INTEGER,
        references: {
          model: Race,
          key: "id",
        },
        allowNull:false
      },
      rank: {
        field: "rank",
        type: DataTypes.INTEGER,
        allowNull:false
      },
    },
    {
      sequelize,
      tableName: "drivers_races",
      timestamps: false,
    }
  );
}
