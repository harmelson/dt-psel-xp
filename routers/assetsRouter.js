const express = require('express');
const assetsController = require('../controllers/assetsController');
const assetsValidation = require('../controllers/validations/assetsValidation');

const router = express.Router();

router
  .get('/:codAtivo', assetsValidation.filterByAssetCode, assetsController.findByAssetCode);

module.exports = router;