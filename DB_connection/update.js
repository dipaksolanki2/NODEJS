const dbConnect = require('./mongoDB')

const updateData = async () => {
    let data = await dbConnect()
    let result = await data.updateOne(
        {name: 'Reno 7 '}, {$set: {name: 'Reno 6'}}
    )
    console.log(result);
}
updateData()