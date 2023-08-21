const mongoose = require('mongoose')
const complainSchema = mongoose.Schema({
    roll: String,
    msg: String,
  }) 

module.exports = new mongoose.model('complainModel',complainSchema)
