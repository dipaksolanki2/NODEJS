const {MongoClient} = require('mongodb')

// Connection URL
const url = 'mongodb://localhost:27017';

const dataBase = 'e-comm'
const client = new MongoClient(url)

async function getData() {
    let result = await client.connect()
    let db = result.db(dataBase)
    let collection = db.collection('products')
    let response = await collection.find().toArray();
    console.log(response);
}

getData()
