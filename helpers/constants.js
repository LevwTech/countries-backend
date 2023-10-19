const COUNTRIES_PER_PAGE = 10;

const MESSAGES = {
  NO_COUNTRIES_FOUND: 'No countries found',
};

const COUNTRIES_API_BASE_URL =
  'https://restcountries.com/v3.1/all?fields=name,flags';

module.exports = {
  COUNTRIES_PER_PAGE,
  MESSAGES,
  COUNTRIES_API_BASE_URL,
};
