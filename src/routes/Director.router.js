const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/Director.controller");
const express = require("express");

const DirectorRouter = express.Router();

DirectorRouter.route("/").get(getAll).post(create);

DirectorRouter.route("/:id").get(getOne).delete(remove).put(update);

module.exports = DirectorRouter;
