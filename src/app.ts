import { Express, Request, Response } from "express";
import express from "express";
import helmet from "helmet";
import { dbConnection } from "./db";
import CompetitionRoutes from "./routes/competitions";
import TeamRoutes from "./routes/teams";
import CircuitRoutes from "./routes/circuits";
import DriverRoutes from "./routes/drivers";
import RaceRoutes from "./routes/races"
import UserRoutes from "./routes/users";
import RankingRoutes from "./routes/rankings";
import DriversRacesRoutes from "./routes/driversRaces";
import { verifyToken } from "./middlewares/verifytoken";
import { hasRights } from "./middlewares/hasRights";
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

const app: Express = express();
const port: number = 3000;

// MIDDLEWARE

app.use(express.json());
app.use(helmet());
app.use(verifyToken);

app.use(hasRights);
dbConnection();

// ROUTES

app.use("/competitions", CompetitionRoutes);
app.use("/teams", TeamRoutes);
app.use("/circuits", CircuitRoutes);
app.use("/drivers", DriverRoutes);
app.use("/races", RaceRoutes);
app.use("/users", UserRoutes);
app.use("/rankings", RankingRoutes);
app.use("/driversraces", DriversRacesRoutes);
app.get("/", (req: Request, res: Response): void => {
  res.send("Welcome to Formula-api");
});

// LISTENER

app.listen(port, (): void => {
  console.log(`Server Launched: http://localhost:${port}/ `);
});

export { app };

// ZONE TEST
