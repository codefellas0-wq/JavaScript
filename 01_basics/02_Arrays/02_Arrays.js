const { verify } = require("node:crypto")

const marvel_heroes = ["thor" , "hulk" , "ironman"]
const dc_heroes = ["superman" , "flash"  , "batman"]
// marvel_heroes.push(dc_heroes);
// console.log(marvel_heroes[3])
// const heroes = marvel_heroes.concat(dc_heroes)
// console.log(heroes)

// spread operator - it is used to spread out the arr 
const all = [...marvel_heroes, ...dc_heroes]
console.log(all)

const anotherarr =[1,2,3,[4,5,6],7,[6,7,[5,6]]]
const real = anotherarr.flat(Infinity) // it is used to flat the all the inside array into simple arr 
console.log(real)

// use isArray method to find out or verify the Array
console.log(Array.isArray("naresh"))
//use from method to convert anything in arr 
console.log(Array.from("naresh"))
console.log(Array.from({name : "naresh"})) // it cannot directly access these values

// of method - similiarly as from but with multiple variable (Returns a new array from a set of elements.)
let s1 = 100;
let s2 = 200;
let s3 = 300;
console.log(Array.of(s1 , s2 , s3))