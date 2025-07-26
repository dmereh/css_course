function myFunction(){
    console.log("I live in London")
    console.log("I would rather live in Dubai")
}

//set timer to repeat the code
let timer = setInterval(
  myFunction  
, 1000); 

//add function to stop the timer
function stop() {
    clearInterval(timer);
}

//set timeout to stop the code at specific time
setTimeout(stop, 10000)