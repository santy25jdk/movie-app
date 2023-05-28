const request = require("supertest");
const app = require("../app");
require("../models");

let genreId;

//? Create Genre: POST /genres
test("POST/ Create Genre", async () => {
  const genre = {
    name: "Regueton",
  };
  const res = await request(app).post("/genres").send(genre);
  genreId = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body.id).toBeDefined();
});

//? Get Genres: GET /genres
test("GET/ Get All Genres", async () => {
  const res = await request(app).get("/genres");
  expect(res.status).toBe(200);
  expect(res.body).toHaveLength(1);
});

//? Update Genre: PUT /genres/:id
test("PUT/ update genre", async () => {
  const genreUpdate = {
    name: "Regueton update",
  };
  const res = await request(app).put(`/genres/${genreId}`).send(genreUpdate);
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(genreUpdate.name);
});

//? Delete Genre: DELETE /genres/:id
test("DELETE/ remove genre", async () => {
  const res = await request(app).delete(`/genres/${genreId}`);
  expect(res.status).toBe(204);
});
