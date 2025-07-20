
//This part is object
const user={
    username:"hitesh",
    price:999,

    welcomeUser:function(){
        // console.log(`${this.username},welcome to website`)      //hitesh,welcome to website
        // console.log(this)
        /*
        {
            username: 'hitesh',
            price: 999,
            welcomeUser: [Function: welcomeUser]
        }
        sam,welcome to website
        { username: 'sam', price: 999, welcomeUser: [Function: welcomeUser] }
         */
    }
}
user.welcomeUser()
user.username="sam"
user.welcomeUser()      //sam,welcome to website
// console.log(this)       //{}   
 
//an {} empty object in node this keyword
//window object in browser for this keyword 

//this part is function
function chai(){
    username:"hitesh"
    // console.log(this.username)      //undefined
    //this is not included in function
}
chai()

const chai1=function(){
    username:"hitesh"
    // console.log(this.username)      //undefined
}
chai1()


//Arrow Function

//remove function keyword and put arrow
const chai2=()=>{
    username:"hitesh"
    console.log(this.username)      //undefined
    console.log(this)               //{}
}
// chai2()

//Explict arrow fn
const addTwo=(n1,n2)=>{
    return n1+n2
}
console.log(addTwo(2,3))        //5

//Implict fn:no need to use return but use paranthesis
const addTwo1=(n1,n2)=>(n1+n2)
console.log(addTwo1(2,3))       //5

//for objects
const addTwo2=(n1,n2)=>({username:"deeksha"})
// console.log(addTwo2.username)


