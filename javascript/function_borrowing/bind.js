let doctor = {
  name: "Dr. Smith",
  specialty: "Cardiology",
};

let actor = {
  name: "Tom Hanks",
  age: 65,
};

function drive(car) {
  console.log("I am " + this.name + " and I am driving a " + car + "!");
}

let actorDrive = drive.bind(actor,"Audi")
actorDrive(); // I am Tom Hanks and I am driving a Audi!
actorDrive();
actorDrive();
actorDrive();

// // drive("toyota")
// console.log(doctor.drive("Toyota"))

// drive.call(actor, "Audi"); //call the function and the object

// drive.apply(actor, ["Audi"]); //uses an array
// drive.apply(actor, ["Audi"]); 



















// const person = {
//     name: "Alice",

// };
// const anotherPerson = { name: "bob"};

// function  greet(greeting) {
//     console.log(`${greeting}, ${this.name}`);
//     }

// greet("Hi")

// // const borrowedGreet = person.greet.bind(anotherPerson);
// // borrowedGreet("Hello"); // Output: Hello, bob
