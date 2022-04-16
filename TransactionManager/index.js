class Transaction {
  constructor(date, description, category, amount) {
    this.date = date;
    this.description = description;
    this.category = category;
    this.amount = amount;
  }
}

function getTransactions() {
  let fake = [];

  let trans1 = new Transaction("11/20/2021", "buy 100 APPL shares", "investment", 15325.74);
  let trans2 = new Transaction("01/12/2022", "buy Java Script book", "education", 70.99);
  let trans3 = new Transaction("02/04/2022", "buy 2 airplane tickets to Denver", "travel", 597.94);
  let trans4 = new Transaction("02/28/2022", "downpayment for house in Colorado Springs", "investment", 62500.92);
  let trans5 = new Transaction("04/10/2022", "donate to Ukrainian Army", "charity", 4932.00);

  fake.push(trans1, trans2, trans3, trans4, trans5);

  return fake;
}

exports.getTransactions = getTransactions;
