const { COUNTRIES_PER_PAGE } = require('./constants');
const getLastPaginationPage = (allCountries) => {
  return allCountries.length / COUNTRIES_PER_PAGE;
};
const getPaginatedCountries = (allCountries, page) => {
  if (page < 1) page = 1;
  const lastPage = getLastPaginationPage(allCountries);
  if (page > lastPage) page = lastPage;
  return allCountries.slice(
    (page - 1) * COUNTRIES_PER_PAGE,
    page * COUNTRIES_PER_PAGE,
  );
};
module.exports = {
  getLastPaginationPage,
  getPaginatedCountries,
};
