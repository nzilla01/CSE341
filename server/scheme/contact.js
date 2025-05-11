const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  favouriteColor: {
    type: String,
    required: true,
  },
  birthday: {
    type: Date,
    default: Date.now,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
});



module.exports = mongoose.model('Contact', contactSchema);