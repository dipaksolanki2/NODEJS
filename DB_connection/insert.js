const dbConnect = require('./mongoDB')

const insert = async() => {
    const db = await dbConnect()
    const result = await db.insertOne(
        {name: 'Reno 7 ', brand: 'OPPO', price: 219, category: 'mobile'},
    )
    console.log(result);

    if (result.acknowledged) {
        console.log('Data Inserted successfully');
    }
}
insert()
