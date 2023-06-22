import { Express, Request, Response } from "express";
const express = require("express");
import { dbConnection } from "./src/db";
// const swaggerUi = require("swagger-ui-express");
// const swaggerDocument = require("./swagger.json");

const app: Express = express();
const port: number = 3000;

// app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.get("/", (req: Request, res: Response): void => {
  res.send("hello");
});

app.get("/save", (req: Request, res: Response): void => {
  res.send("saved!!");
});

app.listen(port, (): void => {
  console.log(`Server Launched: http://localhost:${port}/ `);
});

dbConnection();
