// function greet(name) {
//     console.log(`Hello ${name}`);
// }

// module.exports = greet;

// Multiple exports
function myFunction() {
  console.log("Hello from myFunction!");
}

function myFunction2() {
  console.log("Hello from myFunction2!");
}

module.exports = {
  first: myFunction,
  second: myFunction2,
};
