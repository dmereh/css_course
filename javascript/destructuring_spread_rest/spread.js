// The spread operator (...) in JavaScript is used to expand or "spread" elements of an array or object


// const originalArray = [10, 2, 4];
// const copiedArray = [...originalArray];
// console.log(originalArray)
// console.log(copiedArray)

// //to remove the square brackets & include everything in the array
// const fruits = ['apple', 'banana'];
// const vegetables = ['carrot', 'broccoli'];
// const combined = [...fruits, ...vegetables];

// console.log(combined); // ['apple', 'banana', 'carrot', 'broccoli']

//to add an element to the array
// const nums = [1, 2, 3];
// const extended = [0, ...nums, 4];

// console.log(extended); // [0, 1, 2, 3, 4]

// to change the value of an element in the array
let person = {
  name: "John",
  age: 30,
  occupation: "Developer",
};
const newPerson = {...person, occupation: "Engineer", city: "London"};
console.log(newPerson); //Output: { name: 'John', age: 30, occupation: 'Engineer' }

