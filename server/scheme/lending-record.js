const mongoose = require('mongoose');

const lendingRecordSchema = new mongoose.Schema({
  borrowerName: {
    type: String,
    required: true
  },
  borrowerEmail: {
    type: String,
    required: false
  },
  itemName: {
    type: String,
    required: true
  },
  itemDescription: {
    type: String,
    required: false
  },
  dateBorrowed: {
    type: Date,
    default: Date.now
  },
  dueDate: {
    type: Date,
    required: true
  },
  dateReturned: {
    type: Date
  },
  isReturned: {
    type: Boolean,
    default: false
  },
  notes: {
    type: String
  }
});

module.exports = mongoose.model('LendingRecord', lendingRecordSchema);
