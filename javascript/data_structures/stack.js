let stack = [];

//Pushing elements onto the stack
stack.push(10);
stack.push(20);
stack.push(30);

//Popping an element from the stack - pulls from the last stack
console.log(stack.pop()); //output: 30

//Checking the top element
console.log(stack[stack.length - 1]); //output: 20