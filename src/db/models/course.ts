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
}

export async function initializationCourse(): Promise<void> {
  Course.init(
    {
      id: {
        field: "id",
        type: DataTypes.INTEGER,
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
    },
    {
      sequelize,
      tableName: "courses",
    }
  );
}
