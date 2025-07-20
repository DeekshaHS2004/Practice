

function sayMyName(){
    console.log("D");
    console.log("e");
    console.log("e");
    console.log("k");
    console.log("s");
    console.log("h");
    console.log("a");
}

// sayMyName   //reference   //It doesn't print anything as it doen't contain arguments
// sayMyName()  
/*D
e
e
k
s
h
a
*/

// function addTwoNumbers(num1,num2){
//     console.log(num1+num2)
// }
// addTwoNumbers()         //NaN
// addTwoNumbers(3,2)      //5
// addTwoNumbers(3,"4")    //34
// addTwoNumbers(3,"a")    //3a
// addTwoNumbers(3,null)   //3

function addTwoNumbers(num1,num2){
    // let res=num1+num2   //if conole.log(num1+num2)    then console.log("Result:",res) then it give output as  //Result:undefined
    // console.log("Deeksha")      //Deeksha
    // return res
    // console.log("Deeksha")  //It is not executed because in funcyion definition the statement below the return is not executed  //it is unreachable

    //or

    return num1+num2
}
const res=addTwoNumbers(2,3)
// console.log("Result:",res)      //5
 
/*
function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Deeksha"))    //Deeksha just logged in
console.log(loginUserMessage(""))           // just logged in
console.log(loginUserMessage())             //undefined just logged in
*/
/*
function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter the usrename")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage()) //without return in if
Please enter the usrename
undefined just logged in
console.log(loginUserMessage()) //with return in if 
Please enter the usrename
undefined
*/

//function loginUserMessage(username=="sam")
function loginUserMessage(username){
    if(username===undefined){
        console.log("Please enter the usrename")
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage())
//without parameter
//Please enter the usrename
// undefined
console.log(loginUserMessage())     //sam is logged in  //with parameter
console.log(loginUserMessage("Deeksha"))       //Deeksha just logged in     //sam is overrided with Deeksha


function calculate(...num){
    return num
}
// console.log(calculate(200))             //200
// console.log(calculate(200,300,400))     //200   for num
// console.log(calculate(200,300,400))     //[ 200, 300, 400 ]   for  ...num

//rest operator:-  ...num is rest operator which wraps all the elements as a single array of elements

function calculate1(val1,val2,...num){
    return num
}
// console.log(calculate1(200,300,400,500,600))    //[ 400, 500, 600 ] here 200 is taken as val1 and 300 as val2

const user={
    name:"deeksha",
    fee:1000
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and fee is ${anyobject.fee}`)
}
// handleObject(user)      //username is deeksha and fee is 1000

handleObject({
    name:"sam",
    fee:599
})                  //username is sam and fee is 599

const myNewArray=[100,200,300,400]
function myvalue(getArray){
    return getArray[1]
}
console.log(myvalue(myNewArray))        //200
console.log(myvalue([100,200,300,400]))     //200


