import {
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
  DataTypes,
} from "sequelize";
import { sequelize } from "../index";

export class Circuit extends Model<
  InferAttributes<Circuit>,
  InferCreationAttributes<Circuit>
> {
  declare id: CreationOptional<number>;
  declare name: string;
  declare location: string;
  declare length: number;
  declare createdAt?: Date;
  declare updatedAt?: Date;
}

export function initializationCircuit(): void {
  Circuit.init(
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
        field: "localisation",
        type: DataTypes.TEXT,
      },
      length: {
        field: "length",
        type: DataTypes.FLOAT,
      },
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
    },
    {
      sequelize: sequelize,
      modelName: "circuit",
    }
  );
}
