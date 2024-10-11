const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// added import for notes routes
const noteRoutes = require("./routes/NoteRoutes");
app.use("/", noteRoutes);

mongoose.Promise = global.Promise;

// TODO - Update your mongoDB Atals Url here to Connect to the database
const DB_URL =
  "mongodb+srv://brendandasilva:C1O4kjw9QmwLFgKW@cluster0.c7ocu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Successfully connected to the database mongoDB Atlas Server");
  })
  .catch((err) => {
    console.log("Could not connect to the database. Exiting now...", err);
    process.exit();
  });

app.get("/", (req, res) => {
  res.send("<h1>Welcome to Note taking application - Week06 Exercise</h1>");
});

app.listen(8081, () => {
  console.log("Server is listening on port 8081"); //updated port from 3000 to 8081 in the console.log message to accuractly reflect the correct port
});
