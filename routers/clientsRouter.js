const express = require('express');
const clientsController = require('../controllers/clientsController');
const clientsValidation = require('../controllers/validations/clientsValidation');

const router = express.Router();

router
  .get('/:id', clientsValidation.filterById, clientsController.findById)
  .post('/deposito',
    clientsValidation.filterById,
    clientsValidation.depositValue,
    clientsController.sumBalance)
  .post('/saque', 
    clientsValidation.filterById, 
    clientsValidation.withdrawValue, 
    clientsController.subBalance);

module.exports = router;