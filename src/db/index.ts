import { Sequelize } from "sequelize";

export async function dbConnection() {
  const sequelize = new Sequelize("formula-db", "admin", "admin", {
    host: "localhost",
    dialect: "postgres",
    port: 5433,
  });
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
