Node is an environment in which you can run JavaScript code "Outside the web browser".
It uses Google's V8 Engine to convert the JavaScript code to Machine Code
Node be like – "Hey y'all, you give your JS code to me and I'll run it

// Global variables
__dirname: This variable stores the path to the current working directory.
__filename: This variable stores the path to the current working file.

example: 
// __dirname Global Variable        // __filename Global Variable
   console.log(__dirname);             console.log(__filename);

// Modules => require and module.exports
--> file1:
function sayHello(name){
    console.log(`Hello ${name}`);
}
module.exports = sayHello

--> file2:
const sayHello = require('./file1');

sayHello('John');
sayHello('Peter');

--> multiple exports
--> myModule.js
function myFunction1() {
  console.log('Hello from myFunction1!');
}

function myFunction2() {
  console.log('Hello from myFunction2!');
}

module.exports = {
  first: myFunction1,
  second: myFunction2
};

--> we can use now as:
const myModule = require('./myModule');

myModule.first(); 
myModule.second(); 

// Express -> npm i express
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(3000)

// Middleware
app.use((req, res, next) => {
  console.log('aesa code jo route change hone se pehle run hota ho use middleware kehte he!') 
  next(); // Call the next middleware function
});

// req, res and next
req -> gives us access to information about the incoming request.
res -> allows us to prepare and send the response back to the client.
next -> is used to pass control to the next middleware function or route handler in the stack. (otherwise it      will  stuck in the middleware)


// Dynamic Routing -->
for make route dynamic we can put colon (:)
/:username -> params
if we've to access this in page we can write log as -> req.params.username

// EJS Setup
1) npm i ejs
2) configure ejs => app.set("view engine", "ejs");
3) create  folder name => views
4) In that folder create 'ejs' files
5) Now instead of send, we write 'render' 
   make sure during render - we write exact file name without .ejs extension in from views folder in render fn

   in ejs we can write dynamic values with syntax -> <%=____ %>


//-------------Express Generator-----------------------(using it we get boiler plate of express)
npm i express-generator -g

to create a new express app :-
express 'appname' --view=ejs
cd appname
npm install
