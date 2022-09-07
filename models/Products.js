const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    sku: { type: String, required: true, unique: true },
    quantity: { type: Number, required: true },
    productName: { type: String, required: true },
    image: { type: String },
    category: { type: String },
    productDescription: { type: String, required: true },
    price: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", ProductSchema);
