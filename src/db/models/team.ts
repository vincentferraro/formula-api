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
        allowNull:false
      },
      location: {
        field: "location",
        type: DataTypes.TEXT,
        allowNull:false
      },
      competitionId: {
        field: "competition_id",
        type: DataTypes.INTEGER,
        allowNull:false
      },
    },
    {
      sequelize: sequelize,
      modelName: "team",
      timestamps: false,
    }
  );
}
