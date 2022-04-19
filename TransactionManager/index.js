// Creating Transaction class with date, description, category and amount
class Transaction {
  constructor(date, description, category, amount) {
    this.date = date;
    this.description = description;
    this.category = category;
    this.amount = amount;
  }
}
// Calling getTransactions function
function getTransactions() {
  // Creating an array of fake transactions
  let fake = [];

  // Instantiating 5 transactions
  let trans1 = new Transaction("11/20/2021", "buy 100 APPL shares", "investment", 15325.74);
  let trans2 = new Transaction("01/12/2022", "buy Java Script book", "education", 70.99);
  let trans3 = new Transaction("02/04/2022", "buy 2 airplane tickets to Denver", "travel", 597.94);
  let trans4 = new Transaction("02/28/2022", "downpayment for house in Colorado Springs", "investment", 62500.92);
  let trans5 = new Transaction("04/10/2022", "donate to Ukrainian Army", "charity", 4932.00);
  // Adding all transactions to the fake array
  fake.push(trans1, trans2, trans3, trans4, trans5);
  // Returnung array of fake transactions
  return fake;
}
// Exporting getTransactions module
exports.getTransactions = getTransactions;
