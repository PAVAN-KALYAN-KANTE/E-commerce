const mongoose = require("../connection/connection");

const schema = mongoose.Schema;
var ProductSchema = new schema(
  {
    title: String,
    price: Number,
    desciption: String,
    category: String,
    image: String,
    rating: {
      rate: Number,
      count: Number,
    },
  },
  {
    versionKey: false,
  }
);

var ProductModel = mongoose.model("ProductModel", ProductSchema);
module.exports = ProductModel;
