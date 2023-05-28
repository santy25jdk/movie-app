const request = require("supertest");
const app = require("../app");
require("../models");

let directorId;

//? Create Director: POST /directors
test("POST/ crear director", async () => {
  const director = {
    firstName: "Jhon",
    lastName: "Kenedy",
    nationality: "USA",
    image: "asadffadfasdff",
    birthday: "1990-07-20",
  };
  const res = await request(app).post("/directors").send(director);
  directorId = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body.id).toBeDefined();
});

//? Get Directors: GET /directors
test("GET/ Get All Directors", async () => {
  const res = await request(app).get("/directors");
  expect(res.status).toBe(200);
  expect(res.body).toHaveLength(1);
});

//? Update Directors: PUT /directors
test("PUT/ update director", async () => {
  const directorUpdate = {
    firstName: "Jhon update",
  };
  const res = await request(app)
    .put(`/directors/${directorId}`)
    .send(directorUpdate);
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(directorUpdate.name);
});

//? Delete Directors: DELETE /directors
test("DELETE/ remove director", async () => {
  const res = await request(app).delete(`/directors/${directorId}`);
  expect(res.status).toBe(204);
});
