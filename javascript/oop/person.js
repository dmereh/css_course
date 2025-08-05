// const person = {
//     name: "Alice",
//     greet() {
//         console.log(`Hello, my name is ${this.name}`);
//     },
// };

// person.greet(); //output: Hello, my name is Alice

// function Person(name, age) {
//     this.name = name;
//     this.age = age;

//     this.greet = function() {
//         console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old`);
//     };
//     }

// const person1 = new Person("Bob", 30);
// person1.greet(); //Output: Hi, I'm Bob and I'm 30 years old

// function House(address, numRooms, hasGarage) {
//   this.address = address;
//   this.numRooms = numRooms;
//   this.hasGarage = hasGarage;

//   this.describe = function () {
//     console.log(
//       `House at ${this.address} with ${this.numRooms} rooms${this.hasGarage ? ' and a garage.' : '.'} `
//     );
//   };
// }

// // Create a new house instance
// const myHouse = new House("123 Main St", 4, true);
// myHouse.describe() // Output: House at 123 Main St with 4 rooms and a garage.

class House2 {
  constructor(address, numRooms, hasGarage) {
    this.address = address;
    this.numRooms = numRooms;
    this.hasGarage = hasGarage;
  }

  describe() {
    return `House at ${this.address} with ${this.numRooms} rooms${this.hasGarage ? ' and a garage.' : '.'}`;
  }
}

// Usage:
const newHouse2 = new House("456 Oak Ave", 3, true);
console.log(newHouse2.describe());
// Output: House at 456 Oak Ave with 3 rooms.

