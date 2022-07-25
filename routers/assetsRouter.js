const express = require('express');
const assetsController = require('../controllers/assetsController');
const assetsValidation = require('../controllers/validations/assetsValidation');

const router = express.Router();

router
  .get('/:codAtivo', assetsValidation.filterGetByAssetCode, assetsController.getByAssets)
  .get('/cliente/:codCliente', assetsValidation.filterByClientCode, assetsController.getByClient);

module.exports = router;