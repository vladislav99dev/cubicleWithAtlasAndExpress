const Cube = require("../models/Cube");
const Accessory = require("../models/Accessory");

const addAccessory = async (cubeId, accessoryId) => {
  let cube = await Cube.findById(cubeId);
  let accessory = await Accessory.findById(accessoryId);

  cube.accessories.push(accessory);
  return cube.save();
};

const cubeAccessoryService = {
  addAccessory,
};

module.exports = cubeAccessoryService;
