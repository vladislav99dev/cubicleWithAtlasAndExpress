const mongoose = require("mongoose");

const cubeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, 'Name should have at least 3 characters.']
  },
  description: {
    type: String,
    required: true,
    minLength: [8, 'Description should have at least 2 characters.']

  },
  imageUrl: {
    type: String,
    required: true,
    validate: [/^https:\/\/\S+/, 'The url you provided is not in the expected format.']
    

  },
  difficulty: {
    type: String,
    required: true,
  },
});
const Cube = mongoose.model('Cube', cubeSchema)
module.exports = Cube;