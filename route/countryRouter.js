const express = require('express');
const controller = require('../controller/countryController');

const router = new express.Router();

router.get('/', controller.getCountries);

module.exports = router;
