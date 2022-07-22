const { engine } = require("express-handlebars");
const path = require('path');

function initHandlebars(app) {
  app.set("views", path.resolve("./views"));

  app.engine(
    "hbs",
    engine({
      extname: "hbs",
    })
  );
  
  app.set("view engine", "hbs");
}

module.exports = initHandlebars;
