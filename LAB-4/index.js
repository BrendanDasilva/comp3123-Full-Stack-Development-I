const express = require("express");
const app = express();
const SERVER_PORT = process.env.port || 3000;

// GET http://localhost:3000
app.get("/", (req, res) => {
  res.send("Hello Express JS");
});

// GET http://localhost:3000/user
app.get("/user", (req, res) => {
  const firstname = req.query.firstname || "Pritesh";
  const lastname = req.query.lastname || "Patel";
  res.json({ firstname, lastname });
});

// POST http://localhost:3000/user/fname/lname
app.post("/user/:firstname/:lastname", (req, res) => {
  const { firstname, lastname } = req.params;
  res.json({ firstname, lastname });
});

app.listen(SERVER_PORT, () => {
  console.log(`Server is running on http://localhost:${SERVER_PORT}`);
});
