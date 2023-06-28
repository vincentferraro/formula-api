import { Express, Request, Response } from "express";
import express from "express";
import helmet from "helmet";
import { dbConnection } from "./src/db";
import CompetitionRoutes from "./src/routes/competitions";
import TeamRoutes from "./src/routes/teams";
import CircuitRoutes from "./src/routes/circuits";
import DriverRoutes from "./src/routes/drivers";
import CourseRoutes from "./src/routes/courses";
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

const app: Express = express();
const port: number = 3000;

// MIDDLEWARE

app.use(express.json());
app.use(helmet());
dbConnection();

// ROUTES

app.use("/competitions", CompetitionRoutes);
app.use("/teams", TeamRoutes);
app.use("/circuits", CircuitRoutes);
app.use("/drivers", DriverRoutes);
app.use("/courses", CourseRoutes);
app.get("/", (req: Request, res: Response): void => {
  res.send("Welcome to Formula-api");
});

// LISTENER

app.listen(port, (): void => {
  console.log(`Server Launched: http://localhost:${port}/ `);
});

export { app };
