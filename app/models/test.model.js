const mongoose = require("mongoose");

const Test = mongoose.model(
  "Test",
  new mongoose.Schema({
    place: String,
    dangerLevel: Number,
    content: String,
    lat: Number,
    lon: Number,
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  }, { timestamps: true })
);

module.exports = Test;
