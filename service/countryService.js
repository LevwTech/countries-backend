const axios = require('axios');
const redis = require('../config/redis');
const { MESSAGES, COUNTRIES_API_BASE_URL } = require('../helpers/constants');
const { getPaginatedCountries } = require('../helpers/utils');

class countryService {
  static async getCountries({ page = 1 }) {
    let allCountries = [];
    allCountries = await redis.get('allCountries');
    allCountries = await JSON.parse(allCountries);
    if (!allCountries) {
      const allCountriesRes = await axios.get(`${COUNTRIES_API_BASE_URL}`);
      allCountries = allCountriesRes.data;
      if (!allCountries.length) {
        throw new Error(MESSAGES.NO_COUNTRIES_FOUND);
      }
      await redis.set('allCountries', JSON.stringify(allCountries));
    }
    return getPaginatedCountries(allCountries, page);
  }
}
module.exports = countryService;
