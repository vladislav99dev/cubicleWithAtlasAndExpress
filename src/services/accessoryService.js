const Accessory = require("../models/Accessory");

const create = (name, description, imageUrl) => {
  return Accessory.create({ name, description, imageUrl });
};

const getAll = () => {
  return Accessory.find().lean();
}
const findById = (id) => {
  return Accessory.findById(id);
}

const accessoryService = {
  create,
  getAll,
  findById
};

module.exports = accessoryService;
