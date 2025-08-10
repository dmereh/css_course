function* printName () {
   yield "My name is John"
   yield "I live in London"
   yield "I am 40 years old"
}

const gen = printName()
gen.next()
gen.next()
gen.next()
let result = gen.next()
console.log(result) 
console.log(result.done) 