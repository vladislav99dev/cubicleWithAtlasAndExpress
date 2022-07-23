const router = require("express").Router();
const cubeService = require("../services/cubeService");

const displayCreatePage = (req, res) => {
  res.render("create");
};

const displayDetailsPage = (req, res) => {
  res.render("details");
};

const createCubeHandler = (req, res) => {
  const { name, description, imageUrl, difficulty } = req.body;
  if (name && description && imageUrl && difficulty) {
    cubeService
      .create(name, description, imageUrl, difficulty)
      .then((dbResponse) => {
        res.redirect("/");
      })
      .catch((err) => {
        // we should add error name here errors should be thrown from the model itself
        console.log(err);
        console.log("Error");
      });
  } else {
    // we should add error name here
    console.log(name, description, imageUrl, difficulty);
  }
};

router.get("/create", displayCreatePage);
router.post("/create", createCubeHandler);

router.get("/details/:cubeId", displayDetailsPage);

module.exports = router;
