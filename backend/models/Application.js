const mongoose = require("mongoose");
const applicationSchema = mongoose.Schema({
    roll: String,
    letter: String,
  });
module.exports = new mongoose.model("applicationModel", applicationSchema);
