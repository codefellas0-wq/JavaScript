// immediately Invoked function Expersions(IIFE) - global scope ke pollution se problem hoti hai to usko hatane ke liye IFFE use karte hai
(function nar (){
    console.log("DB Connected");
})();

((name) =>  {
    console.log(`DB connected two ${name}`);
})('naresh');