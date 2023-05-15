const express = require("express");
const GenreRouter = require("./Genre.router");
const ActorRouter = require("./Actor.router");
const DirectorRouter = require("./Director.router");
const MovieRouter = require("./Movie.router");
const router = express.Router();

// colocar las rutas aquí
router.use("/genres", GenreRouter);
router.use("/actors", ActorRouter);
router.use("/directors", DirectorRouter);
router.use("/movies", MovieRouter);

module.exports = router;
