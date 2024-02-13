const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/e-comm');

const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String
})

const insertDB = async () => {
    const product = mongoose.model('products', productSchema)
    let data = new product({name: 'A31', price: 599, brand: 'Samsung', category: 'mobile'})
    let result = await data.save()
    console.log(result) 
}
// insertDB()

const updateDB = async () => {
    const products = mongoose.model('products', productSchema)
    let data = await products.updateOne({name: 'A31'}, {$set: {name: 'A35', price: '699'}})
    console.log(data);
}
// updateDB()

const deleteDB = async () => {
    const products = mongoose.model('products', productSchema)
    let data = await products.deleteOne({name: 'A31'})
    console.log(data);
}
// deleteDB()

const readDB = async () => {
    const products = mongoose.model('products', productSchema)
    let data = await products.find()
    console.log(data);
}
// readDB()
