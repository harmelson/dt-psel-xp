const express = require('express');
const clientsController = require('../controllers/clientsController');
const clientsValidation = require('../controllers/validations/clientsValidation');
const assetsValidation = require('../controllers/validations/assetsValidation');

const router = express.Router();

router
  .post('/vender', 
  clientsValidation.filterById,
  assetsValidation.verifyAssetExists,
  assetsValidation.filterGetByAssetCodeBody,
  clientsValidation.qntdAtivoValidation,
  clientsValidation.sellAssetValidation, 
  clientsController.sellAsset)
  .post('/comprar', 
  clientsValidation.filterById, 
  assetsValidation.verifyAssetExists, 
  clientsValidation.qntdAtivoValidation,
  clientsValidation.buyAssetQuantityValidation, 
  clientsValidation.qntdBuyValidation,
  clientsController.buyAsset);

module.exports = router;