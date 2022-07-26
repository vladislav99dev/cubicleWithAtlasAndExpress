const router = require("express").Router();

const cubeService = require("../services/cubeService");
const accessoryService = require("../services/accessoryService");

router.get("/:cubeId", async(req, res) => {
    try {
        const cube = await cubeService.findById(req.params.cubeId)
        const accessories = await accessoryService.getAll();
        res.render('attachAccessory', {cube, accessories})
    }
    catch(err){
        res.render('404', {err: err.message})
    }
});

module.exports = router;














// const cubeId = req.params.cubeId;
// cubeService
//   .findById(cubeId)
//   .then((cube) => {
//     res.render("attachAccessory",  cube );
//   })
//   .catch((err) => {});
