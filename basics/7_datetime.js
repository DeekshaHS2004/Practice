//DATES

let myDate=new Date()
// console.log(myDate)  //gives today's date in number
// console.log(myDate.toString())  //today's date with time in words
// console.log(myDate.toDateString())  //today's date in words
// console.log(myDate.toLocaleString())  //in number
// console.log(typeof myDate)  //object

let createdDate=new Date(2025,1,2,5,3)
// let myDate1=new Date("2025-01-13")   //2025-01-13T00:00:00.000Z
let myDate1=new Date("01-15-2010")
// console.log(createdDate)
// console.log(createdDate.toDateString())
// console.log(createdDate.toLocaleString())
// console.log(myDate1)

/**********************TIME***********************/
let myTimeStamp=Date.now()
// console.log(myTimeStamp);
// console.log(myDate.getTime())
console.log(Math.floor(Date.now()/1000));


let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getDay())

newDate.toLocaleString('default',{
    weekday:"long"
})

console.log(newDate)