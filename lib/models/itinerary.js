const mongoose = require('mongoose');
const itinerarySchema = new mongoose.Schema({
  tripId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Trip',
    required: true
  },
  
  location: {
    type: Number,      
    required: true
  },
  museum: {
    type: String,
    required: true,
  },
  stadium: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Itinerary', itinerarySchema);
