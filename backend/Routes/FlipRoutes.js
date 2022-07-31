const express = require("express");
const fliproute = express.Router();
const bodyParser = require("body-parser");

fliproute.use(bodyParser.json());

const FlipActions = require("../db/FlipActions");

fliproute.post("/login", (req, res) => {
  FlipActions.loginUser(req, res);
});

fliproute.post("/AddProduct", (req, res) => {
  console.log(req.body);
  let Productobj = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
    category: req.body.category,
    image: req.body.image,
    rating: req.body.rating,
  };

  console.log("route", Productobj);

  FlipActions.AddProduct(Productobj, req, res);
});

module.exports = fliproute;
