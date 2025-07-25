// let person1 = {
//   name: "John",
//   age: 30,
//   occupation: "Developer",
//   address: {
//     street: "123 Main St",
//     city: "Anytown",
//     state: "CA",
//     zip: "12345",
//   },
//   hobbies: ["reading", "hiking", "coding"],
// };
// console.log(person1.name); //to access the property seperate with .
// console.log(person1.name = "Jane") //change the value of the property - can also use person1.name = "Jane" before the console log

// let animal {}
// let animal = new Object() //another way to create an object
// animal.name = "Bella"
// animal.age = 3
// animal.type = "Dog"
// animal.color = "Black"
// animal.hobbies = ["chasing", "playing", "snuggling"]
// console.log(animal)

let footballer = {
    name: "Bukayo Saka",
    age: 23,
    position: "Winger",
    team: "Arsenal",
    shirtNumber: 7,
    kick: function(){
    console.log(this.name + " Kick the ball") //using a function within an object
},
    score: function(){
    console.log(this.name + " scores a goal")
}
}

// for (const key in footballer) {
    // console.log(footballer[key]) //to see the value of the property
//     console.log(key) //to see all the keys
// }

footballer.score()