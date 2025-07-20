

//don't use var because var written inside the block scope is executed outside the block scope which should not be the case

let a=100
if(true){
    let a=10
    const b =20
    // console.log("Inner:",a)     //Inner: 10
}
// console.log(a)      //error
// console.log(b)      //error
// as both a and b are in inside the block scope
// console.log(a)      //100


//Nested Scope

function one(){
    const username="deeksha"
    function two(){
        const website="frontend"
        // console.log(username)       //deeksha
    }
    // console.log(website)        //not accessible outside the block scope
    two()
}
one()

if(true){
    const username="deeksha"
    if(username==="deeksha"){
        const website="youtube"
        // console.log(username+website)       //deekshayoutube
    }
    // console.log(website)        //not accessible outside the block scope
}
// console.log(username)           //not accessible outside the fglobal scope

addOne(3)                    //no error, executed without error
console.log(addOne(3))         //4
function addOne(num){       //It is called only function
    return num+1
}
// addOne(3)       //executed with no error and nothing is printed

// addTwo(3)       //error
const addTwo=function(num){     //It is called both function and expression
    return num+2
}
// addTwo(3)   //executed with no error and nothing is printed

