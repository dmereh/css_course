// app.js

// Import named exports and the default export from math.js
import multiply, { add as dd, subtract, PI } from "./math.js";

// perfom operations and log results to the console
const resultAdd = dd(5, 3); //renamed add to dd
const resultSub = subtract(10, 4);
const resultMulitply = multiply(10, 3)

console.log("Addition Result:", resultAdd);
console.log("Subtraction Result:", resultSub);
console.log("Value of PI:", PI);
console.log("Multiplication Result:", resultMulitply);

// Optional: show results on the html page
document.getElementById("output").innerHTML = `
  <p>Add(5, 3) = ${resultAdd}</p>
  <p>Subtract(10, 4) = ${resultSub}</p>
  <p>PI = ${PI}</p>
  <p>Multiply(10, 3) = ${resultMulitply}</p>
`;
