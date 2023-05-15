const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/Genre.controller");
const express = require("express");

const GenreRouter = express.Router();

GenreRouter.route("/").get(getAll).post(create);

GenreRouter.route("/:id").get(getOne).delete(remove).put(update);

module.exports = GenreRouter;
