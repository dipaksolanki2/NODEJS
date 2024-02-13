const express = require("express");
require("./config");
const Product = require("./product");

const app = express();

app.use(express.json());

app.post("/create", async function (req, res) {
  let data = new Product(req.body);
  let result = await data.save();
  console.log(result);
  res.send(result);
});

app.get("/list", async function (req, res) {
  let data = await Product.find();
  res.send(data);
});

app.delete("/delete/:_id", async function (req, res) {
  //console.log(req.params) //mein id milti hi jo hm link ke sath bhejte he
  let data = await Product.deleteOne(req.params);
  res.send(data);
});

app.put("/update/:_id", async function (req, res) {
  let data = await Product.updateOne(req.params, { $set: req.body });
  res.send(data);
});

app.listen(4000);
