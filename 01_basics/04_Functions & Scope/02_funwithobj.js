function calculatecartprice(val1 , val2 , ...num1){ //rest operator - used to pass multiple values
    return num1;
}
console.log(calculatecartprice(2 , 3, 7, 7))
// passing object in functions
const user = {
    username : "naresh",
    price : 22
}
function handleobject(anyobj){
console.log(`username is ${anyobj.price} and price is ${anyobj.username}`)
}
handleobject(user)

// passing array in functions

const mynewarr = [200 , 100 , 500];
function returnsec(getArr){
    return getArr[1];
}
console.log(returnsec(mynewarr));

//or
console.log(returnsec([200,400,500]));