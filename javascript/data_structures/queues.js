let queue = [];

//Enqueuing elements
queue.push(10);
queue.push(20);
queue.push(30);

//Dequeuing an element
console.log(queue.shift()); //output:10

//checking the front element
console.log(queue[0]); //output: 20


// //JSON .stringify() method
// let person = {firstName : "Deeqa"
//     , lastName : "Mohamed"
//     , age : 25
// }
// console.log(person);

// let json = JSON.stringify(person)
// console.log(json);

// let person2 = JSON.parse(json);
// console.log(person2);