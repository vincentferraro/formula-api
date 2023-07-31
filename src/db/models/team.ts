import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "../index";

export class Team extends Model<
  InferAttributes<Team>,
  InferCreationAttributes<Team>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare location: string;
  declare competitionId: string;
}

export function initializationTeam(): void {
  Team.init(
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
      location: {
        field: "location",
        type: DataTypes.TEXT,
      },
      competitionId: {
        field: "competition_id",
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize: sequelize,
      modelName: "team",
      timestamps: false,
    }
  );
}
