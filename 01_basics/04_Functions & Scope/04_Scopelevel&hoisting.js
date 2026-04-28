//nested scope 
function one  (){
    const username = "naresh"
    function two(){
        const website = "youtube"
        console.log(username) // it will run because username is global scope for this fun 2
    }
    // console.log(website); // will not run because website is block scope for fn one 

two();
}
one(); 
//closure - child function parent ke varibale ko access kar sakte hai

if(true){
    const username = "abcd"
    if(username == "abcd"){
        const website = "google"
        console.log(username+website)
    }
    // console.log(website) - 1st error
}
// console.log(username)

// ++++++++++++++++++++++++++++++++++++++++++++++_Intersting_______________
console.log(add1(5)); // this will rn even before execution
function add1(num){  // fuunction
return num+1;
}

add1(5);
console.log(add2(5)); // it will not run because it is holding in const variable and this can only run after declaration and its called hoisting
const add2 = function(num){ // experssion 
    return num+2
}
add2();

