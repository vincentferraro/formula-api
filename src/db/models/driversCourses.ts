import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "../index";

export class DriversCourses extends Model<
  InferAttributes<DriversCourses>,
  InferCreationAttributes<DriversCourses>
> {
  declare driverId: number;
  declare courseId: number;
  declare rank: number;
}

export async function initializationDriversCourses(): Promise<void> {
  DriversCourses.init(
    {
      driverId: {
        field: "driver_id",
        type: DataTypes.INTEGER,
      },
      courseId: {
        field: "course_id",
        type: DataTypes.INTEGER,
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
