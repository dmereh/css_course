//Creating a map
let firstNames = new Map()

//Setting key-value pairs
firstNames.set("name", "Alice");
let ageKey = {age: ""}
firstNames.set(ageKey, 30);

console.log(firstNames.get(ageKey))
firstNames.clear()
console.log(firstNames)

//difference between object and map is the keys in a map can be any data type. eg.g strings, boolean

// //Accesing values
// console.log(map.get("name")); // Output: Alice
// console.log(map.get("age")); // Output: 30

// //Checking the size of the map
// console.log(map.size); // Output: 2

// //Removing a key-value pair
// map.delete("age");

// //Checking if a key exists
// console.log(map.has("age")); // Output: false

// //Iterating through a map
// for (let [key, value] of map) {
//     console.log(key + ": " + value); //Output: name: Alice
//     }
