import mongoose from "mongoose";

const ProductSchema = mongoose.Schema(
{
  name: {
    type: String,
    required: true
  },

  quantity: {
    type: Number,
    required: true
  },

  price: {
    type: Number,
    required: true
  },

  image: {
    type: String,
    required: false
  }
},
{
  timestamps: true
}
);

const Product = mongoose.model("Product", ProductSchema);

export default Product;