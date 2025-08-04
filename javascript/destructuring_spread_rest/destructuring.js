let person = {
    name: "John",
    age: 30,
    occupation: "Developer"
    };
//destructuring
// console.log(person['age'])
// let {occupation, age} = person 
// console.log(age)



let listOfNames = ["Deeqa", "Hannan", "Nadia", "Amina", "Sara"];
// let oneName = listOfNames[0];
// console.log(oneName)

//spread operators
let [,,oneName] = listOfNames //comma in this instance means skips the first
console.log(oneName)