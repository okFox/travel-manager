const superagent = require('superagent');

const getWeather = (city) => {
  return superagent
    .get(`https://www.metaweather.com/api/location/search/?query=${city}`)
    .then(res => {
      const [{ weather }] = res.body;

      return weather;
    });
};

module.exports = {
  getWeather
};