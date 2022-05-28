const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    order:{
        type:String,
        required:true,
        
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
   
})

const Orders = new mongoose.model("Orders",orderSchema);
module.exports=Orders;