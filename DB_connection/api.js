const express = require("express");
const mongoDB = require('mongodb')

const app = express();

const dbConnect = require("./mongoDB");

app.use(express.json()); // for parsing! -> req.body

// app.get('/', async(req, res) => {

//     let data = await dbConnect()
//     data = await data.find().toArray();
//     console.log(data);
//     res.send(data)
//     // res.send({name: 'Dipak'})
// })

// app.listen(3000, () => {
//     console.log('Server is running on port 3000')
// })

app.get("/", (req, res) => {
  res.send({ name: "Dipak" });
});

// app.post('/', (req, res) => {
//     console.log(req.body);
//     res.send({name: 'Dipak Solanki'})
// })

app.post("/", async (req, res) => {
  let data = await dbConnect();
  let result = await data.insertOne(req.body); //req.body use krne ke liye app.use(express.json()) jaroori hunda si!
  res.send(result);
});

// app.put("/:brand", async (req, res) => {
app.put("/", async (req, res) => {
  //   console.log(req.body);
  let data = await dbConnect();
//   let result = await data.updateOne({ brand: req.params.brand }, { $set: req.body });
  let result = await data.updateOne({ brand: req.body.brand }, { $set: req.body });
  res.send({ result: "success" });
});

app.delete('/:id', async (req, res) => {
    // console.log(req.params.id)
    let data = await dbConnect();
    let result = await data.deleteOne({ _id: new mongoDB.ObjectId(req.params.id) });
    res.send(result);
    // res.send("Successfully deleted")
})

app.listen(3000);
