const mongoose = require("../connection/connection");

const schema = mongoose.Schema;
var UserSchema = new schema(
  {
    email: String,
    username: String,
    password: String,
    name: {
      firstname: String,
      lastname: String,
    },
    address: {
      city: String,
      street: String,
      number: Number,
      zipcode: Number,
      geolocation: {
        lat: Number,
        long: Number,
      },
    },
    phone: String,
    cart: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "CartModel",
    },
  },
  {
    versionKey: false,
  }
);

var UserModel = mongoose.model("UserModel", UserSchema);
module.exports = UserModel;
