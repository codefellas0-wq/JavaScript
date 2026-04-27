 // singleton - constructor se banega to singleton banega aur object literals se nhi banega
//   object literals
// Object.create() - constructor method

const mysym = Symbol("key1") // symbol creation 
const jsuser = {
    name : "naresh"   , 
    [mysym] :"mykey1",
    age : 18 , 
    email :"np@google.com",
    isloggedin : true
}

//to access objects
console.log(jsuser.name); //1st method
console.log(jsuser["email"]) //2nd way
console.log(jsuser[mysym])

// to freeze user object 
// Object.freeze(jsuser);
// jsuser.name = "ankit"
console.log(jsuser.name);

// to add functions in objects
jsuser.greeting = function(){
    console.log(`hello bro , ${this.name}`);
}
console.log(jsuser.greeting());