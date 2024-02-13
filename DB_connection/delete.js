const dbConnect = require('./mongoDB')

const deleteData = async () => {
    let data = await dbConnect()
    let result = await data.deleteOne(
        {name: 'Reno 7 '}, {$set: {name: 'Reno 6'}}
    )
    console.log(result);
}
// deleteData()