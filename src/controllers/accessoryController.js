const router = require("express").Router();
const accessoryService = require("../services/accessoryService");

const displayCreatePage = (req, res) => {
  res.render("createAccessory");
};

const createAccessoryHandler = (req, res) => {
  const { name, description, imageUrl } = req.body;
  if (name && description && imageUrl) {
    console.log(name,description,imageUrl)
    accessoryService
      .create(name, description, imageUrl)
      .then((dbResponse) => {
        res.redirect("/");
      })
      .catch((err) => {
        res.render("createAccessory", { err: err.message });
      });
  } else {
    let err = "All fileds should be filled.";
    res.render("createAccessory", { err });
  }
};

router.get("/create", displayCreatePage);
router.post("/create", createAccessoryHandler);

module.exports = router;
