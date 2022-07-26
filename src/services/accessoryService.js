const Accessory = require("../models/Accessory");

const create = (name, description, imageUrl) => {
  return Accessory.create({ name, description, imageUrl });
};

const getAll = () => {
  return Accessory.find();
}

const accessoryService = {
  create,
  getAll,
};

module.exports = accessoryService;
