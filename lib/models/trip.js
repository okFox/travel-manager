const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  tripName: {
    type: String,
    required: true
  },
  startLocation: {
    type: String,
    required: true,
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  }
});

module.exports = mongoose.model('Trip', tripSchema);
