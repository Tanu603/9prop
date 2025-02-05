const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const connection = require("../../db/connection");

var featuresSchema = new Schema({
  userId: {
    type: String,
  },
  features: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
  },
  created_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  updated_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  status: {
    type: String,
    required: true,
  },
});
var Features = connection.model("Features", featuresSchema);
module.exports = Features;

