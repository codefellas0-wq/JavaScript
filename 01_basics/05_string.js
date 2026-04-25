const name = "naresh"
const repocount = 50
console.log(name+repocount)
console.log(`my name is ${name} and my repocount is ${repocount}`) //string interpolation
const name1 = new String("naresh") // string object
console.log(name1)
// method of string
console.log(name1[0])
console.log(name1.__proto__)
console.log(name1.toUpperCase())
console.log(name1.indexOf('e'))
const ss = name1.substring(0,5);
console.log(ss);
// slice - can be used negative values 
const ss1 = name1.slice(-2,5);
console.log(ss1)
// replace 
const ss2 = name1.replace('nare' , 'nish');
console.log(ss2)
//split 
const ss3 = name1.split("");
console.log(ss3)
