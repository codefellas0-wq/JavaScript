// delcaring objects using singleton or constructor
const tinder = new Object()

tinder.id = "123abc"
tinder.name = "naresh"
tinder.isloggedin = true;
//  console.log(tinder)
console.log(Object.keys(tinder)) // to get the keys
console.log(Object.values(tinder))
console.log(tinder.hasOwnProperty('islogged')) // to verify the existing value
// adding object into objects 
 const regularuser = {
    email : "np@google.com",
    fullname :{
userfullname :{
    firstname : "naresh",
    lastname : "patel"
}

    }

}
// console.log(regularuser)

// to merge two objects 
const obj1 = { 1 : "a" , 2 : "b" , 3:"c"}
const obj2 = { 4 : "a" , 5 : "c" , 6  : "d"}
// const obj3 = Object.assign({},obj1 , obj2)  // assign variable
const obj3 = {...obj1, ...obj2}
console.log(obj3)