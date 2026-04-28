//declaraton
function saymyname(){
console.log("naresh")
console.log("naresh")
console.log("naresh")
console.log("naresh")
console.log("naresh")
}
// saymyname = refernece
// saymyname() = function 
saymyname()
function addtwonum(n1 , n2){ //(n1 , n2) - parameters
let result = n1+n2
return result;
}
const result = addtwonum(3,"a") // arguments
console.log("result:" , result) // undefined aayega without return 

// ways to take values as parameter
function userlogin(username){ // defualt value --- usernam = "sam"
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

console.log(userlogin())


