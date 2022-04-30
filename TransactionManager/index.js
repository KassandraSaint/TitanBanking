// Creating Transaction class with date, description, category and amount
class Transaction {
  constructor(id, date, description, type, amount) {
    this.id = id;
    this.date = date;
    this.description = description;
    this.type = type;
    this.amount = amount;
  }
}

// Creating an array of fake transactions
var fake = [];
// Instantiating 5 transactions
let trans1 = new Transaction(1, "11/20/2021", "buy 100 APPL shares", "debit", 15325.74);
let trans2 = new Transaction(2, "01/12/2022", "buy Java Script book", "credit", 70.99);
let trans3 = new Transaction(3, "02/04/2022", "buy 2 airplane tickets to Denver", "debit", 597.94);
let trans4 = new Transaction(4, "02/28/2022", "downpayment for house in Colorado Springs", "debit", 62500.92);
let trans5 = new Transaction(5, "04/10/2022", "donate to Ukrainian Army", "credit", 4932.00);
// Adding all transactions to the fake array
fake.push(trans1, trans2, trans3, trans4, trans5);

// Calling getTransactions function
function getTransactions() {
  // Returnung array of fake transactions
  return fake;
}

// Calling addTransaction function to generate and add a new transaction
function addTransaction(id, date, description, type, amount) {
  // Generating new transaction
  let transaction = new Transaction(id, date, description, type, amount);
  // Adding new transaction to an array of transactions and returning it
  fake.push(transaction);
  return transaction;
}

// Calling deleteTransaction with specified id
function deleteTransaction(id) {
  // Filtering transactions by id and removing one
  fake = fake.filter(function(transaction) {
    return transaction.id != id;
  });
}

// Exporting getTransactions, addTransaction and deleteTransaction modules
exports.getTransactions = getTransactions;
exports.addTransaction = addTransaction;
exports.deleteTransaction = deleteTransaction;
