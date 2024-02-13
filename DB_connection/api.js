const express = require('express')
const app = express()

const dbConnect = require('./mongoDB')
const { json } = require('body-parser')

app.get('/', async(req, res) => {

    let data = await dbConnect()
    data = await data.find().toArray();
    console.log(data);  
    // res.send({name: 'Dipak'})
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})
