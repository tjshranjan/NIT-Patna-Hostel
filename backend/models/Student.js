const mongoose = require('mongoose')
const StudentSchema = mongoose.Schema({
    enroll_id: String,
    roll: String,
    name: String,
    email: String,
    phone: String,
    address: String,
    branch: String,
    year: String,
    room: String,
  })
module.exports = mongoose.model('StudentModel',StudentSchema)
