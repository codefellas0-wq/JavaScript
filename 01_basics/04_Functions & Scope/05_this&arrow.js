// this and arrow function
const user = {
username : "naresh",
price : 99,
welcomepage : function(){
console.log(`${this.username} , welcome to website`)
console.log(this) //{ username: 'sam', price: 99, welcomepage: [Function: welcomepage] }
}
}
user.welcomepage()
user.username = "sam"
 user.welcomepage()
 console.log(this) // {}

 //this - current values and context btata hai

function one (){
    console.log(this.username) // undefined
}
one();
// --------------------------------------------------------------------------------------------------------
//arrow function 
 const chai = () =>{
    let username = "naresh"
     console.log(this.username) // undefined
 }

const addtwo = (num1 , num2) => { // return likhna padega agar curly braces me likho to {}
    return num1 + num2
}
console.log(addtwo(3,4))

// implicit reutrn other way to define arrwo function 
const addtw = (num1 , num2) =>  (num1+num2) // no need to write return or it can be () and normal
console.log(addtw(3,4));

// to return object
const addobj = (num1 , num2) => ({username : "hitesh"}) // it is necessary to put () while returning object 
console.log(addobj(3,4))

