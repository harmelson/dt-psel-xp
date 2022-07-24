const express = require('express');
const clientsController = require('../controllers/clientsController');
const clientsValidation = require('../controllers/validations/clientsValidation');
const assetsValidation = require('../controllers/validations/assetsValidation');

const router = express.Router();

router
  .post('/vender', 
  clientsValidation.filterById,
  assetsValidation.filterGetByAssetCodeBody,
  clientsValidation.sellAssetValidation, 
  clientsController.sellAsset);

module.exports = router;