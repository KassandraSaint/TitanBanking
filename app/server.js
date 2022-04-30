// Importing express and body parser
var express = require("express");
var parser = require("body-parser");
// Importing new transactionManager module
var transactionManager = require("transactionmanager");
// Initializing express server
var server = express();
// Imporitng transactions file from routes folder
var transactions = require('../routes/transactions');
// Using middleware to parser json body
server.use(parser.json());
// Connecting router to application
server.use('/transactions', transactions);
// Listening on port 3000
server.listen(3000);
