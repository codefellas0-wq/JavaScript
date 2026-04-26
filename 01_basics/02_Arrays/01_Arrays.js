// array
// declaration in js
 const myArr = [0,1, 2,3,4,5]
 const heroes = ["hulk" , "ironman"]
 const myArr2 = new Array(1,3,4,2,4)
console.log(myArr[1])

 // arrays in js is an object in which collection of multiple datatype in a single variable  and these are resiazable 
 //it is associative and cannot  access arbitiarily
 // it creates shallow copies when we copies in arrays
 // which means copy and original share the same reference points
 // .....heap unlike deep copies

//  Methods in arr
// push
myArr.push(6)
console.log(myArr)
//pop
myArr.pop()

// unshift - method is used to insert begining of array and it shifts all the remaining values
myArr.unshift(9);
console.log(myArr)
// shift - to remove the unshift value
myArr.shift();
console.log(myArr.indexOf(9))

const newArray = myArr.join()
console.log(typeof(newArray));

// slice  - it doesnt manupulate original array and it doesnt include the last index it defined
console.log("A" , myArr);
const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log(myArr)

// splice - it is  manupulate original array and it include the last index of the array when it splice 
const myn2 = myArr.splice(1,3) 
 console.log(myn2);
 console.log(myArr);
 