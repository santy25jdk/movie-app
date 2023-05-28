const request = require("supertest");
const app = require("../app");
const Actor = require("../models/Actor.model");
const Director = require("../models/Director.model");
const Genre = require("../models/Genre.model");
require("../models");

let movieId;

//? Create Movie: POST /movies
test("POST/ create movie", async () => {
  const movie = {
    name: "piratas del caribe",
    image: "asddgtgetg",
    synopsis: "pelicula de acción",
    releaseYear: 2010,
  };
  const res = await request(app).post("/movies").send(movie);
  movieId = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body.id).toBeDefined();
});

//? Get Movies: GET /movies
test("GET/ Get Movies", async () => {
  const res = await request(app).get("/movies");
  expect(res.status).toBe(200);
  expect(res.body).toHaveLength(1);
  expect(res.body[0].genres).toBeDefined();
  expect(res.body[0].actors).toBeDefined();
  expect(res.body[0].directors).toBeDefined();
});

//? Update Movie PUT /movies/:id
test("PUT/ Update Movie", async () => {
  const movieUpdate = {
    name: "piratas update",
  };
  const res = await request(app).put(`/movies/${movieId}`).send(movieUpdate);
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(movieUpdate.name);
});

//? Insert Actors in Movie: POST /movies/:id/actors
test("POST/ /movies/:id/actors insert actors in movie", async () => {
  const actor = await Actor.create({
    firstName: "Vin",
    lastName: "Disel",
    nationality: "USA",
    image: "asdafsrgt",
    birthday: "1990-10-30",
  });
  const res = await request(app)
    .post(`/movies/${movieId}/actors`)
    .send([actor.id]);
  await actor.destroy();
  expect(res.status).toBe(200);
  expect(res.body).toHaveLength(1);
});

//? Insert Directors in Movie: POST /movies/:id/directors
test("POST/ /movies/:id/directors insert directors in movie", async () => {
  const director = await Director.create({
    firstName: "Jhon",
    lastName: "Kenedy",
    nationality: "USA",
    image: "asadffadfasdff",
    birthday: "1990-07-20",
  });
  const res = await request(app)
    .post(`/movies/${movieId}/directors`)
    .send([director.id]);
  await director.destroy();
  expect(res.status).toBe(200);
  expect(res.body).toHaveLength(1);
});

//? Insert Genres in Movie: POST /movies/:id/genres
test("POST/ /movies/:id/genres insert genres in movies", async () => {
  const genre = await Genre.create({
    name: "Pop",
  });
  const res = await request(app)
    .post(`/movies/${movieId}/genres`)
    .send([genre.id]);
  await genre.destroy();
  expect(res.status).toBe(200);
  expect(res.body).toHaveLength(1);
});

//? Delete Movie: DELETE /movies/:id
test("DELETE/ remove movie", async () => {
  const res = await request(app).delete(`/movies/${movieId}`);
  expect(res.status).toBe(204);
});
