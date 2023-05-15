const {
  getAll,
  create,
  getOne,
  remove,
  update,
  setMoviesGenres,
  setMoviesActors,
  setMoviesDirectors,
} = require("../controllers/Movie.controller");
const express = require("express");

const MovieRouter = express.Router();

MovieRouter.route("/").get(getAll).post(create);

MovieRouter.route("/:id").get(getOne).delete(remove).put(update);

MovieRouter.route("/:id/genres").post(setMoviesGenres);
MovieRouter.route("/:id/actors").post(setMoviesActors);
MovieRouter.route("/:id/directors").post(setMoviesDirectors);

module.exports = MovieRouter;
