const sequelize = require("../utils/connection");
require("../models");
require("../models/Movie.model");
require("../models/Director.model");
require("../models/Genre.model");
require("../models/Actor.model");

const main = async () => {
  try {
    await sequelize.sync({ force: true });

    process.exit();
  } catch (error) {
    console.log(error);
  }
};

main();
