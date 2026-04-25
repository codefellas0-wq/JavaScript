const score = 400
console.log(score)
const balance = new Number(100)
// console.log(typeof(balance))
//methods of num 
// console.log(balance.toString().length)
// to fix - fix decimal places  
// console.log(balance.toFixed(2))
// to precision - round figure value with 1-20 value places
// console.log(2003.33 .toPrecision(5));
//locale string
const h = 1000000
// console.log(h.toLocaleString('en-IN'))

// +++++++++++++++++++++Maths++++++++++++++++++++++++
//math function 
console.log(Math.abs(-5))
//round
console.log(Math.round(4.3)) // 4
//ceil
console.log(Math.ceil(4.3)) // 5
console.log(Math.floor(4.9)) // 4
//random
console.log(Math.floor(Math.random()*10) +1); // 0-1
const min = 10
const max = 20
console.log(Math.floor(Math.random()*(max - min +1))+min) 