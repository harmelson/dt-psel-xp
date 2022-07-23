const express = require('express');
const clientsController = require('../controllers/clientsController');
const clientsValidation = require('../controllers/validations/clientsValidation');

const router = express.Router();

router
  .get('/:id', clientsValidation.filterById, clientsController.findById);

module.exports = router;