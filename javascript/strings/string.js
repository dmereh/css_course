// let town = "London"

// const fullName1 = "Deeqa Mereh" //double quotes
// const fullName2 = 'Deeqa Mereh' //single quotes
// const fullName3 = `Deeqa Mereh`; //template literals using back ticks
// const fullName4 = new String ("Deeqa Mereh"); //string object using the new keyword

// // let fullSentence = "Hello, my name is " + fullName1 + " and I am from " + town; //concatenation
// let fullSentence = `Hello, my name is ${fullName1} and I am from ${town}
// console.log(fullSentence)

// // console.log(fullName.toUpperCase())

// let fullName = "Deeqa Abdulghani Ahmed Mereh";
// console.log(fullName.length); // how many characters in the value
// console.log(fullName.toUpperCase()); // convert to uppercase
// console.log(fullName.toLowerCase()); // convert to lowercase
// console.log(fullName.charAt(0)); // get the first character
// console.log(fullName.indexOf("a")); // get the index of the first occurrence of the character
// console.log(fullName.slice(0, 5)); // get a part of the string
// console.log(fullName.split("")); // split the string into an array of characters
// console.log(fullName.replace("Abdulghani", "A")); // replace a part of the string
// console.log(fullName.trim()); // remove leading and trailing spaces
// console.log(fullName.includes("a")); // check if the string includes a certain character
// console.log(fullName.startsWith("De")); // check if the string starts with a certain character
// console.log(fullName.endsWith("h")); // check if the string ends with a certain character
// console.log(fullName.repeat(2)); // repeat the string
// console.log(fullName.padStart(20, "*")); // add spaces to the left of the string
// console.log(fullName.padEnd(20, "*")); // add spaces to the right of the string
// console.log(fullName.concat(" ").concat(town)) // add another value to the string
// console.log(fullName + " " + town) // add another value to the string - shorter version

let ukNationalAnthem =
  "God save our gracious King!\nLong live our noble King!\nGod save the King!\nSend him victorious,\nHappy and glorious,\nLong to reign over us,\nGod save the King!";
// console.log(ukNationalAnthem[2]) // [] used to find index

if (ukNationalAnthem.startsWith("King")) {
  console.log("The UK national anthem starts with the word 'King'");
} else {
  console.log("The UK national anthem does not start with the word 'King'");
}
