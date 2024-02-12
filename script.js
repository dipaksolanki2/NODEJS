const express = require('express')
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))

app.use(function(req, res, next) {
    console.log("Hello world from middleware");
    next();
})

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })

app.get('/', function (req, res) {
  res.render('index', {name: 'Dipak Solanki', age: 20})
})

app.get('/profile', function (req, res) {
  res.send(`Hello from Dipak`)
})

app.get('/profile/:username', function (req, res) {
  //Dynamic Routing --> /:username called params of route provided by user as request!
  res.send(`Hello from ${req.params.username}`) 
})

// __dirname Global Variable
// console.log(__dirname);

// __filename Global Variable
// console.log(__filename);

app.listen(3000)