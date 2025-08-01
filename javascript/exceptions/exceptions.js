// try {
//     let firstName =() => console.log('Deeqa')
//     firstNam()
// } catch (e) {
//     console.log ("You have an exception in your code")
// } finally {
//  console.log("This code runs regardless whether there is an error or not")
//     } 
//     //try block used around the code that may have an error
//     //catch block used when if there is an error
//     // finally block opportunity to reverse any errors - the code will run regardless of whether an error occurred or not

try {
    let num1 = 10
    let num2 = 0
    let result = num1 / num2
    if (result === Infinity) {
        throw Error ("You cannot divide a number by zero")} //custom error using throw Error
    console.log(result)
} catch (e) {
    console.log (e.message) 
} finally {
    console.log ("this code runs regardless whether there is an error or not")
}
