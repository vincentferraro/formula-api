import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "../index";
import { Driver } from "./driver";
import { Course } from "./course";

export class DriversCourses extends Model<
  InferAttributes<DriversCourses>,
  InferCreationAttributes<DriversCourses>
> {
  declare DriverId: number;
  declare CourseId: number;
  declare rank: number;
}

export async function initializationDriversCourses(): Promise<void> {
  DriversCourses.init(
    {
      DriverId: {
        field: "driver_id",
        type: DataTypes.INTEGER,
        references: {
          model: Driver,
          key: "id",
        },
      },
      CourseId: {
        field: "course_id",
        type: DataTypes.INTEGER,
        references: {
          model: Course,
          key: "id",
        },
      },
      rank: {
        field: "rank",
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "drivers_courses",
      timestamps: false,
    }
  );
}
