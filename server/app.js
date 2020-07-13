const express = require("express");
const app = express();
const hostname = "localhost";
const port = 3035;
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  next();
});

const searchController = require("./searchController");
app.route("/search").get(searchController.search);

app.listen(port);

console.log(`[Server running on ${hostname}:${port}]`);
