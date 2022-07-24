const router = require("express").Router();

const displayCreatePage = (req, res) => {
  res.render("createAccessory");
};

const createAccessoryHandler = (req, res) => {
  const { name, description, imageUrl } = req.body;
  res.end();
};

router.get("/create", displayCreatePage);
router.post("/create", createAccessoryHandler);

module.exports = router;
