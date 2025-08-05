class Animal {
    constructor(name) {
        this.name = name;
    } //class used is the parent


eat() {
    console.log(`${this.name} is eating`);
    }
}

class Dog extends Animal {
    bark() {
    console.log(`${this.name} says woof!`);
}
} //extended class is the child

class Wolf extends Animal {
    hunts() {
        console.log(`${this.name} is hunting`);
    }
}

const dog = new Dog("Buddy")
dog.eat(); //Output: Buddy is eating
dog.bark(); //Output: Buddy says woof!

const Wolf2 = new Wolf("Cole")
Wolf2.hunts() //Output: Cole is hunting
Wolf2.eat()