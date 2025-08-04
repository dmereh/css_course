// The rest operator (...) in JavaScript looks just like the spread operator, but it's used to collect values instead of spreading them

function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4, 5)); // 15

