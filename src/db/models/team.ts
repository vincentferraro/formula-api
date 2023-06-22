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
  declare localisation: string;
  declare createdAt?: Date;
  declare updatedAt?: Date;
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
      localisation: {
        field: "localisation",
        type: DataTypes.TEXT,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize: sequelize,
      modelName: "team",
    }
  );
}
