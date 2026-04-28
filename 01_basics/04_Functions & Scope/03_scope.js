
// console.log(a , b , c)

//Scope 
let a = 100
var c = 100;
if(true){
let a = 10;
const b = 20;
var c = 30
console.log(a) // block scope
}

console.log(c , a) // global scope 
for(let i = 0; i<array.length; i++){
    const element = array[i];
}
