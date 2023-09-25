import { expect, test } from "vitest";
import { dbConnection } from "../../../db";
import { getTeamById } from "../../../routes/teams/getTeamById";
const request = require("supertest")
import { app } from "../../../../app";
test("test getTeamById routes", async()=>{

    await request(app)
  .get('/drivers/')
  .set('Authorization', "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTU3NDMzNzE5NjcsInVzZXJuYW1lIjoiYWRtaW4iLCJyb2xlIjoiQURNSU4iLCJpYXQiOjE2OTU2NTY5NzF9.gGq5AiC3DVHeK2dnyEkSQdIvXOEPHF8nm5bC2wSZjEY")
  .set('username','admin')
  .set('password','admin')
  .expect(200)
//   .end(function(err, res) {
//     if (err) throw err;
//   });
})