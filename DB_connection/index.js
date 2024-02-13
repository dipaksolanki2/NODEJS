const dbConnect = require('./mongoDB')

dbConnect().then((res) => {
  res
    .find()
    .toArray()
    .then((data) => {
      console.log(data);
    });
});
dbConnect()

// const main = async () => {
//     let data = await dbConnect();
//     data = data.find().toArray()
//     console.log(data);
// }
// main()


