const { Router } = require('express');
const Itinerary = require('../models/itinerary');

module.exports = Router()
  .post('/', (req, res) => {
    Itinerary
      .create(req.body)
      .then(itinerary => res.send(itinerary));
  })

  .get('/', (req, res) => {
    Itinerary
      .find()
      .select({ notes: false })
      .then(itinerary => res.send(itinerary));
  })

  .get('/:id', (req, res) => {
    Itinerary
      .findById(req.params.id)
      .populate('recipeId')
      .then(itinerary => res.send(itinerary));
  })

  .patch('/:id', (req, res) => {
    Itinerary
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(itinerary => res.send(itinerary));
  })

  .delete('/:id', (req, res) => {
    Itinerary
      .findByIdAndDelete(req.params.id)
      .then(itinerary => res.send(itinerary));
  });
