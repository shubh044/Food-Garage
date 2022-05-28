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
//   soups: {
//     type: String,
//   },
//   garlicBread: {
//     type: String,
//   },
//   noodles: {
//     type: String,
//   },
//   fries: {
//     type: String,
//   },
//   dals: {
//     type: String,
//   },
//   rice: {
//     type: String,
//   },
//   roti: {
//     type: String,
//   },
//   sabzi: {
//     type: String,
//   },
//   pizza: {
//     type: String,
//   },
//   burger: {
//     type: String,
//   },
//   shake: {
//     type: String,
//   },
  bread: {
    type: String,
  },
  garlic: {
    type: String,
  },
  food: {
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
