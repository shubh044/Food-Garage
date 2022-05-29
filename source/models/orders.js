const mongoose = require("mongoose");
const orderSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  soups: {
    type: String,
  },
  garlicbread: {
   type: String,
 },
 noodles: {
  type: String,
   },
 fries: {
 type: String,
   },
   dals: {
    type: String,
   },
   rices: {
    type: String,
  },
  rotisnaan: {
     type: String,
   },
 sabzis: {
    type: String,
   },
  pizzas: {
     type: String,
   },
   burgers: {
     type: String,
   },
   shakes: {
     type: String,
   },
  corn: {
    type: String,
  },
  
//   phone: {
//     type: String,
//     required: true,
//     unique: true,
//   },
  address: {
    type: String,
    required: true,
  },
});

const Orders = new mongoose.model("Orders", orderSchema);
module.exports = Orders;
