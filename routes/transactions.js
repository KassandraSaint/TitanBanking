// Importing Express and initializing router
var express = require("express");
var router = express.Router();
// Importing new transactionManager module
var transactionManager = require("transactionmanager");

// On get request grabbing transactions from transaction manager and showing them in json string
router.get('/', function(req, res) {
  let transactions = transactionManager.getTransactions();
  res.json(transactions);
});
// On post request adding a new transaction to transaction manager with random number id and showing it as json string
router.post('/', function(req, res) {
  let id = Math.round(Math.random() * 10 + 10);
  let transaction = transactionManager.addTransaction(id, req.body.date, req.body.description, req.body.type, parseFloat(req.body.amount));
  res.json(transaction);
});
// On delete deleteing a transaction with soecified id and showing transactions in json string
router.delete('/:id', function(req, res) {
  transactionManager.deleteTransaction(parseInt(req.params.id));
  res.json(req.params.id);
});

// Exporting router module
module.exports = router;
