const Product = require("./Warehouse/productSchema");
const User = require("./Warehouse/userSchema");

var FlipActions = {
  loginUser(userObj, req, res) {
    console.log(userObj);
    User.find(
      { email: userObj.email, password: userObj.password },
      (err, content) => {
        if (err) {
          console.log("error");
          res.json({ status: 404, responseText: "error in finding" });
        } else if (content && content.length > 0) {
          let userData = content;
          res.json({ status: 200, responseText: userData });
        } else if (content.length == 0 || content == []) {
          res.json({
            status: "failed",
            responseText: "No user found",
          });
        }
      }
    );
  },

  SignupUser(userObj, req, res) {
    User.find(
      { email: userObj.email, password: userObj.password },
      (err, content) => {
        if (err) {
          console.log("error");
          res.json({ status: 404, responseText: "error in finding" });
        } else if (content && content.length > 0) {
          res.json({ status: 404, responseText: "user already exists" });
        } else if (content.length == 0 || content == []) {
          let user = new User({
            email: userObj.email,
            password: userObj.password,
          });
          user.save((err) => {
            if (err) {
              console.log("error occured in registering");
              res.json({
                status: 403,
              });
            } else {
              res.json({
                content: content,
                responseText: "added",
                isUserAdded: true,
              });
            }
          });
        }
      }
    );
  },

  AddProduct(Productobj, req, res) {
    var product = new Product({
      title: Productobj.title,
      price: Productobj.price,
      description: Productobj.description,
      category: Productobj.category,
      image: Productobj.image,
      rating: Productobj.rating,
    });
    product.save((err) => {
      if (err) {
        console.error("error");
      } else {
        console.log("success");
        res.json({
          status: "success",
          responseText: "Product added successfully",
        });
      }
    });
  },

  getProducts(req, res) {
    Product.find((err, content) => {
      if (err) {
        re;
      }
    });
  },
};

module.exports = FlipActions;
