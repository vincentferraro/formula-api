import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
  Optional,
} from "sequelize";
import { sequelize } from "../index";
// order of InferAttributes & InferCreationAttributes is important.
export class Competition extends Model<
  InferAttributes<Competition>,
  InferCreationAttributes<Competition>
> {
  // 'CreationOptional' is a special type that marks the field as optional
  // when creating an instance of the model (such as using Model.create()).
  declare id: CreationOptional<number>;
  declare name: string;
}
export function initializeCompetition(): void {
  Competition.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      sequelize: sequelize,
      modelName: "competition",
      timestamps: false,
    }
  );
}
