const Product = require("./Warehouse/productSchema");

var FlipActions = {
  loginUser(req, res) {
    console.log("Actions");
    res.json({
      status: "success",
      responseText: "welcome to login",
    });
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
      }
    });
  },
};

module.exports = FlipActions;
