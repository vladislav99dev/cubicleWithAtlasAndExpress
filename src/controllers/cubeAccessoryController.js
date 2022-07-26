const router = require("express").Router();

const cubeService = require("../services/cubeService");
const accessoryService = require("../services/accessoryService");
const cubeAccessoryService = require("../services/cubeAccessoryService");

const displayAttachAccessoryPage = async (req, res) => {
  try {
    const cube = await cubeService.findById(req.params.cubeId);
    const accessories = await accessoryService.getAll();
    res.render("attachAccessory", { cube, accessories });
  } catch (err) {
    res.render("404", { err: err.message });
  }
};

const attachAccessoryHandler = (req, res) => {
  const accessoryId = req.body.accessory;
  const cubeId = req.params.cubeId;
  cubeAccessoryService
    .addAccessory(cubeId, accessoryId)
    .then((cube) => {
      console.log(cube);
      res.redirect(`/cube/details/${cube._id}`);
    })
    .catch((err) => {
      res.render("404", { err: err.message });
    });
};

router.get("/:cubeId", displayAttachAccessoryPage);
router.post("/:cubeId", attachAccessoryHandler);

module.exports = router;
