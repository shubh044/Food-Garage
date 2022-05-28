const mongoose=require("mongoose");
mongoose.connect("mongodb://localhost:27017/FoodGarage").then(() =>{
    console.log("connection successfull");
}).catch((e)=>{
    console.log("connection unscuccessful")
})
