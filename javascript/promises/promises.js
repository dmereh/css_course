// // Mother's promise to buy an iPhone if the boy behaves well
// let boyBehaves = false; // Change to false to simulate misbehavior

// let motherPromise = new Promise((resolve, reject) => {
//   if (boyBehaves == true) {
//     resolve("Mom buys the iphone");
//   } else {
//     reject("Mom: No iPhone! You didn't behave.");
//   }
// });

// let fathersPromise = motherPromise.then((momMessage) => {
//   console.log(momMessage);
//   return "Here is the SIM card"

// }).catch((error) => {
//     console.log(error);
//     console.log("boy: oh no! my dream of getting an iPhone is shattered.");
// });
// console.log (fathersPromise)

// let makeTea = new Promise((resolve, reject) => {
//   let waterBoiled = false; // Change this to false to simulate failure

//   if (waterBoiled) {
//     resolve("Step 2: Water is boiled. Tea is ready to be made! ☕");
//   } else {
//     reject("Step 2: Couldn't boil water. No tea. 😢");
//   }
// });

// //use the promise to make tea
// makeTea
//   .then((message) => {
//     console.log (message);
//     console.log("Water is ready! Time to enjoy your tea!:)");
//   })
//   .catch((error) => {
//     console.log(error);
//     console.log("water is not boiled");
//   });


// Mother's promise to buy an iPhone if the boy behaves well
let boyBehaves = true; // Change to false to simulate misbehavior

let motherPromise = new Promise((resolve, reject) => {
  console.log("Boy: Mom, will you buy me an iPhone?");
  if (boyBehaves) {
    resolve("Mom: I will buy you an iPhone!");
  } else {
    reject("Mom: No iPhone! You didn't behave.");
  }
});

// Father's promise to buy a SIM card if mom buys the iPhone
let fatherPromise = (motherResponse) => {
  return new Promise((resolve, reject) => {
    console.log("Boy: Dad, if Mom buys me an iPhone, will you buy me a SIM card?");
    if (motherResponse.includes("iPhone")) {
      resolve("Dad: Yes, I'll buy you a SIM card.");
    } else {
      reject("Dad: No iPhone, no SIM card.");
    }
  });
};

// Sister's promise to buy a phone cover if dad buys the SIM card
let sisterPromise = (fatherResponse) => {
  return new Promise((resolve, reject) => {
    console.log("Boy: Sis, if Dad buys me a SIM card, will you buy me a phone cover?");
    if (fatherResponse.includes("SIM card")) {
      resolve("Sister: Sure! I'll get you a phone cover.");
    } else {
      reject("Sister: No SIM card, no phone cover.");
    }
  });
};

// Execute the whole promise chain
motherPromise
  .then((momReply) => {
    console.log(momReply);
    return fatherPromise(momReply);
  })
  .then((dadReply) => {
    console.log(dadReply);
    return sisterPromise(dadReply);
  })
  .then((sisterReply) => {
    console.log(sisterReply);
    console.log("Boy: Yay! I got an iPhone, SIM card, and phone cover!");
  })
  .catch((error) => {
    console.log("Boy: Oh no! 😢", error);
  });
