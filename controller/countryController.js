const countryService = require('../service/countryService');

module.exports = {
  getCountries: async (req, res) => {
    try {
      const countries = await countryService.getCountries(req.query);
      res.status(201).json(countries);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};
