// Importing http, url and file system modules
var http = require("http");
var url = require('url');
var fileSystem = require('fs');
var transactionManager = require("transactionmanager");

// Creating http server and passing callback function
http.createServer(function (request, response) {
  // Creating url object by parsing url
  var urlObj = url.parse(request.url, true, false);

  if (urlObj.pathname == "/transactions.html" && request.method == "GET") {
    let transactions = transactionManager.getTransactions();
    response.writeHead(200);
    response.end(JSON.stringify(transactions));
  }
  else {

    // Attempting to read a file in the current folder
    fileSystem.readFile("./app" + urlObj.pathname, function (error, data) {
      // Checking if reading a file caused an error
      if (error) {
        // If it caused an error returning 404 not found and a message
        response.writeHead(404);
        response.end("Sorry, the page you are looking for is not here!");
        return;
      }
      // If there was no error reading a file return 200 OK and show data
      response.writeHead(200);
      response.end(data);
    });
  }
}).listen(3000);
