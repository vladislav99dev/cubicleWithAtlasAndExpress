const mongoose = require("mongoose");

const accessorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "All inputs should be filled"],
    minLength: [3, "Name should have at least 3 characters."],
  },
  imageUrl: {
    type: String,
    required: [true, "All inputs should be filled"],
    validate: [
      /^https:\/\/\S+/,
      "The url you provided is not in the expected format.",
    ],
  },
  description: {
    type: String,
    required: [true, "All inputs should be filled"],
    minLength: [8, "Description should have at least 8 characters."],
  },
});

const Accessory = mongoose.model("Accessory", accessorySchema);

module.exports = Accessory;
