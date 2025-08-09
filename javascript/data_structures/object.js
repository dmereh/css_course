//Creating an object 
let person = {
    name: "John",
    age: 30,
    isStudent: false,
};

console.log(person.name)
person.address = "New York";
console.log(person)

// //Accessing properties
// console.log(person.name); //Output: John
// console.log(person["age"]); //Output: 30

// //Adding a new property
// person.country = "USA";

// //Modifying a property
// person.age = 31;

// //Deleting a property
// delete person.isStudent;

// //Looping through object properties
// for (let key in person) {
//     console.log(key + ": " + person[key]);
//     }