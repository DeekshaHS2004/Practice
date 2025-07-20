"use strict"  //treat all JS code as newer version
// alert(3+3)  //we are using nodejs not browser so it shows error if we use brower then in pop up it shows 6
//let state;  //undefined becsuse no value or type is assigned
//let state=" " //string because double code specifies string
let age=12
let name="deeksha"
let id=Symbol('123')
let anotherId=Symbol('123')
console.log(id===anotherId)
let outsidetemp=null
const bigno=13361865628593856910n  //when n is written it will be automatically converted to biginteger

/*Premitive-datatypes */
//number=>2 to power 53
// bigint=>used for large numbers.Used in websites like stock market,facebook
// boolean=>true/false
// null=>standalone value
// undefined=>no value or tye is specified
// symbol=>unique

/* Non-Premetive datatypes */
//=>array,objects,functions

//Array
let names=["a","b","c"]

//obect
const obj={
    name:"deeksha",
    age:20,
}

//function
const myFun=function(){
    console.log("hello world")
}

//type1
// console.log(typeof "deeksha")  //string
// console.log(typeof age)  //number
// console.log(typeof null)  //object
// console.log(typeof undefined)  //undefined
// //type2
// console.log(typeof(age))  //number
// console.log(typeof bigno)
// console.log(typeof outsidetemp)

/***************************************MEMORY****************************************/

let myyoutube="hitesh"
let anothername=myyoutube
anothername="chaiwala"

console.log(myyoutube)
console.log(anothername)

let user={
    email:"deek@gmail.com",
    upi:"deek@bl"
}
let usertwo=user

usertwo.email="user@gmail.com"  //To avccess
console.log(user)
console.log(usertwo)
