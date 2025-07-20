
//if,if else,switch,break


//== : checks for equal value
//===: checks for equal value with same datatype
const userEmail=[];
//to check array for true or false
if(userEmail.length===0){
    // console.log("Array is empty")
}


//Nullish Coalesing Operator(??):null undefined
let val1;
val1=5??10;
val2=null??10;
val3=undefined??15;
val4=null??10??10;

// console.log(val1)   //5
// console.log(val2)   //10
// console.log(val3)   //15
// console.log(val4)   //10

//Tertinary operator

//condition?true:false

const iceTea=100;
// iceTea<=80?console.log("less than 80"):console.log("more than 80")      //more than 80

//-------------------------------------------------------------------------------------------------------------

//Loops

//forof
const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num)
}
/*1
2
3
4
5
*/

const greeting="Hello world"
for (const greet of greeting) {
    // console.log(`Each letter in is ${greet}`)
}
/*  Each letter in is H
Each letter in is e
Each letter in is l
Each letter in is l
Each letter in is o
Each letter in is
Each letter in is w
Each letter in is o
Each letter in is r
Each letter in is l
Each letter in is d
*/

//---------------------------------------------------------------------------------------------------------------------------------

//Maps
//It holds key-value pairs
//**********Maps remembers the order but objects doesn't remember the objects
//Map stores only the unique values i.e it doesn't allow duplicates

const map=new Map()
map.set('IN',"India")
map.set('USA',"America")
map.set('UN',"United Kingdom")
map.set('IN',"India")
// console.log(map)
/*  
Map(3) {
  'IN' => 'India',
  'USA' => 'America',
  'UN' => 'United Kingdom'
}
*/

for (const key in map) {
    // console.log(key)
}
//It doesn't print anything because map is not iteratable

for (const key of map) {
    // console.log(key)
}
/*
[ 'IN', 'India' ]
[ 'USA', 'America' ]
[ 'UN', 'United Kingdom' ]
 */

for (const [key,value] of map) {
    // console.log(key,':-',value)
}
/*
IN :- India
USA :- America
UN :- United Kingdom
*/

/*
const myObj={
    'game1':"GTA",
    'game2':"Chess"
}

for (const [key,value] of myObj) {
    console.log(key,':-',value)
}
//TypeError: myObj is not iterable

const myObj1={
    game1:"GTA",
    game2:"Chess"
}
for (const [key,value] of myObj1) {
    console.log(key,':-',value)
}
//TypeError: myObj is not iterable
*/

//for objects
const myObj3={
    js:"JAvaScript",
    rb:"ruby",
    cbb:"c++"
}
for (const key in myObj3) {
    // console.log(key)     //js    rb     cbb
    // console.log(`${key} shortcut is for ${myObj3[key]}`)
    /*
    js shortcut is for JAvaScript
    rb shortcut is for ruby
    cbb shortcut is for c++
    */
}

//For Arrays
const lang=["js","c","c++","java"]
for (const key in lang) {
    // console.log(key)        //0    1    2    3
    // console.log(lang[key])  //js   c   c++     java
}

//----------------------------------------------------------------------------------------------

//ForEach loop
const lang1=["js","c","c++","java"]
/*
lang1.forEach(function(val){
    console.log(val)    //js    c     c++     java
})
    */

//using arrow function
lang1.forEach((val)=>{
    // console.log(val)    //js    c     c++     java
})

function printMe(item){
    // console.log(item)   //js    c     c++     java
}
lang1.forEach(printMe)

lang1.forEach((item,index,arr)=>{
    // console.log(item,index,arr)
    /*
    js 0 [ 'js', 'c', 'c++', 'java' ]
    c 1 [ 'js', 'c', 'c++', 'java' ]
    c++ 2 [ 'js', 'c', 'c++', 'java' ]
    java 3 [ 'js', 'c', 'c++', 'java' ]
    */
})

const mylan=[
    {
        name:"javascript",
        file:"js"
    },
    {
        name:"java",
        file:"java"
    },
    {
        name:"python",
        file:"py"
    }
]
mylan.forEach((item)=>{
    console.log(item.name)  //javascript    java    python
})


