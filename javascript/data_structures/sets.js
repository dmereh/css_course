//Creating a set SETS ARE UNIQUE
let firstNames = new Set(["Deeqa", "Hannan", "John", "John", "John", "Mahmoud"]);


//Adding values to a set
firstNames.add("Fatima");
console.log(firstNames);
console.log(firstNames.size)


//Checking the size of the set 
// console.log(firstNames.size); //Output 5

//Checking if a value exists
// console.log(firstNames.has(3)); //Output true

//Removing a value
firstNames.delete("Hannan");
console.log(firstNames)
firstNames.clear() //delete all values
console.log(firstNames)
// //Iterating through a set 
// for (let num of firstNames) {
//     console.log(num); //output: 1, 2, 3, 5
// }