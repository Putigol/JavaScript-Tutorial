console.log("Video 33");
// Global variable
let globalVariable = "I am a global variable";

// Function variable
function myFunction() {
  console.log(globalVariable); //accessible
}
myFunction();
console.log(globalVariable); //accessible

function sayHi() {
  let nameHS = "Alice"; //local variable
  console.log("Hi, " + nameHS); //accessible
  //block scope
  if (true) {
    let x = 10;
  }
  console.log(x); // Uncaught ReferenceError: x is not defined
}
sayHi();
console.log(nameHS); // Uncaught ReferenceError: name is not defined
