import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "../index";

export class Ranking extends Model<
  InferAttributes<Ranking>,
  InferCreationAttributes<Ranking>
> {
  declare id: CreationOptional<number>;
  declare rank: number;
  declare point: number;
  declare competitionId: number;
}

export async function initializationRanking(): Promise<void> {
  Ranking.init(
    {
      id: {
        field: "id",
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      rank: {
        field: "rank",
        type: DataTypes.INTEGER,
      },
      point: {
        field: "point",
        type: DataTypes.INTEGER,
      },
      competitionId: {
        field: "competition_id",
        type: DataTypes.INTEGER,
      },
    },
    {
      sequelize,
      tableName: "rankings",
      timestamps: false,
    }
  );
}
