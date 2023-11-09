import mongoose from "mongoose";

const ProductSchema = new mongoose.Schema({
    productName:{
        type:String,
        required:[true,'Please provide the product name'],
        ref: "user"
    },
    productQuantity:{
        type:Number,
        required:false,
        default:1,
        min:0
    },
    productPrice:{
        type:Number,
        required:[true,'Please provide the product price'],
        min:0
    },
    createdAt: {
        type: Number,
        default: () => Date.now(),
      },
})

const Product = new mongoose.model("products", ProductSchema);
export default Product;