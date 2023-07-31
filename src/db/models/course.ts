import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "../index";

export class Course extends Model<
  InferAttributes<Course>,
  InferCreationAttributes<Course>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare year: string;
  declare circuitId: string;
  declare competitionId: string;
  declare round: string;
}

export async function initializationCourse(): Promise<void> {
  Course.init(
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
      tableName: "courses",
      timestamps: false,
    }
  );
}
