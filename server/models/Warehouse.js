import mongoose from "mongoose";

const WarehouseSchema = new mongoose.Schema({
    zone:{
        type:String,
        required:[true,'Please provide the zone'],
        ref:'Zone'
    },
    createdAt: {
        type: Number,
        default: () => Date.now(),
      },
})

const Warehouse = new mongoose.model("warehouse", WarehouseSchema);
export default Warehouse;