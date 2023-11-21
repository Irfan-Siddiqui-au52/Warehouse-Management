import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    warehouses:{
        type:String,
        required:[true,'Please provide the warehouse name'],
        ref:'Warehouses'
    },
    zone:{
        type:String,
        required:[true,'Please provide the zone name'],
        ref:'Zone'
    },
    products:{
        type:String,
        required:[true,'Please provide the product name'],
        ref:'Products'
    },
    createdAt: {
        type: Number,
        default: () => Date.now(),
      },
})

const User = new mongoose.model("user", UserSchema);
export default User;