const mongoose = require('mongoose');
const Itinerary = require('./itinerary');

describe('Itinerary model', () => {
  it('has a required tripId', () => {
    const itinerary = new Itinerary();
    const { errors } = itinerary.validateSync();

    expect(errors.tripId.message).toEqual('Path `tripId` is required.');
  });

  it('has a required location', () => {
    const itinerary = new Itinerary();
    const { errors } = itinerary.validateSync();

    expect(errors.location.message).toEqual('Path `location` is required.');
  });

  it('has a required museum', () => {
    const itinerary = new Itinerary();
    const { errors } = itinerary.validateSync();

    expect(errors.museum.message).toEqual('Path `museum` is required.');
  });

  it('has a required stadium', () => {
    const itinerary = new Itinerary();
    const { errors } = itinerary.validateSync();

    expect(errors.stadium.message).toEqual('Path `stadium` is required.');
  });

  it('has a required duration', () => {
    const itinerary = new Itinerary();
    const { errors } = itinerary.validateSync();

    expect(errors.duration.message).toEqual('Path `duration` is required.');
  });
});
