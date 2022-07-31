const mongoose = require("../connection/connection");

const schema = mongoose.Schema;
let ItemSchema = new schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ProductModel",
    },
    quantity: {
      type: Number,
      required: true,
      min: [1, "Quantity can not be less then 1."],
    },
    price: {
      type: Number,
      required: true,
    },
    total: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const CartSchema = new schema(
  {
    items: [ItemSchema],
    subTotal: {
      default: 0,
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

var CartModel = mongoose.model("CartModel", CartSchema);
module.exports = CartModel;
