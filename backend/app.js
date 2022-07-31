const express = require("express");
const app = express();

const bodyParser = require("body-parser");

const mongoose = require("./db/connection/connection");
const FlipRoutes = require("./Routes/FlipRoutes");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", FlipRoutes);

app.listen(3001, function () {
  console.log("server started");
});
