var http = require("http");
//TODO - Use Employee Module here
var employeeModule = require("./Employee");

console.log("Lab 03 -  NodeJs");

//TODO - Fix any errors you found working with lab exercise

//Define Server Port
const port = process.env.PORT || 8081;

//Create Web Server using CORE API
const server = http.createServer((req, res) => {
  if (req.method !== "GET") {
    res.end(`{"error": "${http.STATUS_CODES[405]}"}`);
  } else {
    res.setHeader("Content-Type", "text/html");

    if (req.url === "/") {
      //TODO - Display message "<h1>Welcome to Lab Exercise 03</h1>"
      res.end("<h1>Welcome to Lab Exercise 03</h1>");

      // these following if blocks were causing errors:
      // Error [ERR_STREAM_WRITE_AFTER_END]: write after end
      // end is being called multiple times in this single request so I changed them to else if blocks to solve the problem
    } else if (req.url === "/employee") {
      //TODO - Display all details for employees in JSON format
      res.end(JSON.stringify(employeeModule.getAllEmployees()));
    } else if (req.url === "/employee/names") {
      //TODO - Display only all employees {first name + lastname} in Ascending order in JSON Array
      //e.g. [ "Ash Lee", "Mac Mohan", "Pritesh Patel"]
      res.end(JSON.stringify(employeeModule.getEmployeeNames()));
    } else if (req.url === "/employee/totalSalary") {
      //TODO - Display Sum of all employees salary in given JSON format
      //e.g. { "total_salary" : 100 }
      res.end(
        JSON.stringify({ total_salary: employeeModule.getTotalSalary() })
      );
    } else res.end(`{"error": "${http.STATUS_CODES[404]}"}`);
  }
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
