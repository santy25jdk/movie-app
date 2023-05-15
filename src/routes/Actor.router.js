const {
  getAll,
  create,
  getOne,
  remove,
  update,
} = require("../controllers/Actor.controller");
const express = require("express");

const ActorRouter = express.Router();

ActorRouter.route("/").get(getAll).post(create);

ActorRouter.route("/:id").get(getOne).delete(remove).put(update);

module.exports = ActorRouter;
