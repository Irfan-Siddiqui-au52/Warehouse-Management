import mongoose from "mongoose";

const ZoneSchema = new mongoose.Schema({
    warehouse:{
        type:String,
        required:[true,'Please provide the warehouse'],
        ref: "Warehouse"
    },
    zone:{
        type:String,
        required:[true,'Please enter the zone name']
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

const Zone = new mongoose.model("zone", ZoneSchema);
export default Zone;