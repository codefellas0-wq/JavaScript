//Dates 
 let myDate = new Date()
 console.log(myDate.toString()); //Sat Apr 25 2026 19:50:15 GMT+0530 (India Standard Time)
 console.log(myDate.toISOString()) //2026-04-25T14:21:16.113Z
  console.log(myDate.toLocaleString()) // 4/25/2026, 7:52:14 PM

  let createdate = new Date(2023 , 2 , 12)
  console.log(createdate.toDateString())
  let date = new Date("2025-01-14")
  console.log(date.toLocaleString());

  let mytimestamps = Date.now()
  console.log(Math.round(mytimestamps/1000))

//   --------------------methods 0f date-------------------------------
// to get date , month , year
//tolocalestring 
myDate.toLocaleString('default' , {
    weekday : "long"
})