const { Router } = require('express');
const Trip = require('../models/trip');
const Itinerary = require('../models/itinerary');

module.exports = Router()
  .post('/', (req, res) => {
    Trip
      .create(req.body)
      .then(trip => res.send(trip));
  })

  .get('/', (req, res) => {
    let tripQuery = {};
    if(req.query.itinerary) {
      tripQuery = { 'itinerary.startLocation': req.query.startLocation }; //or tripName???
    }

    Trip
      .find(tripQuery)
      .select({ name: true })
      .then(trips => res.send(trips));
  })

  .get('/:id', (req, res) => {
    Promise.all([
      Trip.findById(req.params.id),
      Itinerary.find({ tripId: req.params.id })
    ])
      .then(([trip, itinerary]) => res.send({ ...trip.toJSON(), itinerary }));
  })

  .patch('/:id', (req, res) => {
    Trip
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(trip => res.send(trip));
  })

  .delete('/:id', (req, res) => {
    Promise.all([
      trip.findByIdAndDelete(req.params.id),
      Itinerary.deleteMany({ recipeId: req.params.id })
    ])
      .then(([trip]) => res.send(trip));
  });
