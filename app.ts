import { Express, Request, Response } from "express";
const express = require("express");
import { dbConnection } from "./src/db";
import CompetitionRoutes from "./src/routes/competitions";
import TeamRoutes from "./src/routes/teams";
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

const app: Express = express();
const port: number = 3000;

// MIDDLEWARE

app.use(express.json());
dbConnection();

// ROUTES

app.use("/competition", CompetitionRoutes);
app.use("/team", TeamRoutes);
app.get("/", (req: Request, res: Response): void => {
  res.send("hello");
});

// LISTENER

app.listen(port, (): void => {
  console.log(`Server Launched: http://localhost:${port}/ `);
});

export { app };
