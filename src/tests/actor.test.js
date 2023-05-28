const request = require("supertest");
const app = require("../app");
require("../models");

let actorId;

//? Create Actor: POST /actors
test("POST/ create actor", async () => {
  const actor = {
    firstName: "Vin",
    lastName: "Disel",
    nationality: "USA",
    image: "asdafsrgt",
    birthday: "1990-10-30",
  };
  const res = await request(app).post("/actors").send(actor);
  actorId = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body.id).toBeDefined();
});

//? Get Actor: GET /actors
test("GET/ Get All Actors", async () => {
  const res = await request(app).get("/actors");
  expect(res.status).toBe(200);
  expect(res.body).toHaveLength(1);
});

//? Update Actor: PUT /actors/:id
test("PUT/ update genre", async () => {
  const actorUpdate = {
    firstName: "Vin update",
  };
  const res = await request(app).put(`/actors/${actorId}`).send(actorUpdate);
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(actorUpdate.name);
});

//? Delete Actor: DELETE /actors/:id
test("DELETE/ remove actor", async () => {
  const res = await request(app).delete(`/actors/${actorId}`);
  expect(res.status).toBe(204);
});
