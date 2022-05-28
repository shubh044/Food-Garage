const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
// const alert=require("alert")
require("./database/connection");
const Order = require("./models/orders");
const async = require("hbs/lib/async");
const { use } = require("express/lib/application");
const port = process.env.PORT || 3000;
console.log(path.join(__dirname, "../public"));
const staic_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
console.log(template_path);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(staic_path));
app.set("view engine", "hbs");
app.set("views", template_path);

app.get("/", (req, res) => {
  res.render("index");
});
app.get("/order", (req, res) => {
  res.render("order");
});

app.get("/details", (req, res) => {
  res.render("details");
});

app.post("/details", async (req, res) => {
  try {
    const orderReader = new Order({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      garlic: req.body.garlic,
      bread: req.body.bread,
      food: req.body.food,

      // phone:req.body.phone,
      address: req.body.address,
    });
    const order = await orderReader.save();
    
    res.status(201).render("index");
  } catch (error) {
    res.status(400).send(error);
  }
});
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});

