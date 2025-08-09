const person = {
    name: "Alice",

};
const anotherPerson = { name: "bob"};

function  greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
    }
    
greet("Hi")


// const borrowedGreet = person.greet.bind(anotherPerson);
// borrowedGreet("Hello"); // Output: Hello, bob