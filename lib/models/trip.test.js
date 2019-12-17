// const mongoose = require('mongoose');
const Trip = require('./trip');

describe('Trip model', () => {
  it('has a required name', () => {
    const trip = new Trip();
    const { errors } = trip.validateSync();

    expect(errors.tripName.message).toEqual('Path `tripName` is required.');
  });

  it('has a name, location, start and end date', () => {
    const trip = new Trip({
      tripName: 'New England',
      startLocation: 'Boston',
      startDate: new Date('2019-08-08T00:00:00'),
      endDate: new Date('2019-09-26T00:00:00')
    });

    expect(JSON.parse(JSON.stringify(trip))).toEqual({
      _id: expect.any(String),
      tripName: 'New England',
      startLocation: 'Boston',
      startDate: expect.any(String),
      endDate: expect.any(String)
    });

  });
});
