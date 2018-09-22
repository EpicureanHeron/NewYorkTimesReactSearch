const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
// var logger = require("morgan");
var mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here

// Use morgan logger for logging requests
// app.use(logger("dev"));
// Use body-parser for handling form submissions

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/NYT";

// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(MONGODB_URI);

// Define API routes here
require("./controllers/controller.js")(app)
// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});
