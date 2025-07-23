let person1 = {
name: "John",
age: 30,
occupation: "Software Engineer"
}

// for (const key in person1) {
// console.log(key);
// } //to list the properties in the object

for (const key in person1) {
  console.log(key, person1[key]);
} //to list the properties and the object