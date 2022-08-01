const express = require("express");
const fliproute = express.Router();
const bodyParser = require("body-parser");

fliproute.use(bodyParser.json());

const FlipActions = require("../db/FlipActions");

fliproute.post("/login", (req, res) => {
  console.log(req.body);
  let userObj = {
    email: req.body.email,
    password: req.body.password,
  };

  FlipActions.loginUser(userObj, req, res);
});

fliproute.post("/signup", (req, res) => {
  console.log(req.body);
  let userObj = {
    email: req.body.email,
    password: req.body.password,
  };

  FlipActions.SignupUser(userObj, req, res);
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

fliproute.get("/getproducts", (req, res) => {
  FlipActions.getproducts(req, res);
});

module.exports = fliproute;
