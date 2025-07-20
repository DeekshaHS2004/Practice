//objects

//It can be declared in two ways

//object literals
const sym=Symbol("key1")


const JsUser={
    name:"deeksha",
    "full name":"deeksha H S",
    [sym]:"mykey1",
    age:20,
    location:"banglore",
    email:"deekshahs2004@gmail.com",
    isLoggedIn:false,
    lastLogins:["Monday","Tuesday"]
}

// console.log(JsUser.email);  //it doesn't take it has string
//                             //don't use this
// console.log(JsUser["email"])    //it takes as a string so use double quotes
// console.log(JsUser["full name"])  //deeksha H S
// console.log(typeof JsUser[sym])
// console.log(JsUser[sym])   //key1

JsUser.email="deeksha@yahoo.com"
console.log(JsUser["email"])
// Object.freeze(JsUser)
// JsUser.email="deeksha@facwwiqu.com"
// console.log(JsUser["email"])
// console.log(JsUser)

JsUser.greeting=function(){
    // console.log("Hello JS")
}
// console.log(JsUser.greeting())

JsUser.greeting2=function(){
    // console.log(`Hello JS,${this.name}`)
}
// console.log(JsUser.greeting2())



//Constructors

// const user=new Object()   //Singleton object
// console.log(user)  //{}
const user={}        //Non-Singleton object
user.id="123"
user.name="user"
user.isLoggedIn=false
//console.log(user)     //{ id: '123', name: 'user', isLoggedIn: false }

const regularUser={
    email:"deeksha@gmail.com",
    username:{
        fullname:{
            firstname:"deeksha",
            lastname:"hs"
        }
    }
}
// console.log(regularUser.username.fullname)      //{ firstname: 'deeksha', lastname: 'hs' }

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
const obj3={obj1,obj2}
//console.log(obj3)   //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }
const obj4=Object.assign(obj1,obj2)
//console.log(obj4)   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj5=Object.assign({},obj1,obj2)
//console.log(obj5)   //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
const obj6={...obj1,...obj2}
//console.log(obj6)       //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const  users=[
    {
        id:1,
        email:"deek@gmail.com"
    },
    {
        id:1,
        email:"deek@gmail.com"
    },
    {
        id:1,
        email:"deek@gmail.com"
    }
]
users[1].email

// console.log(user)                   //{ id: '123', name: 'user', isLoggedIn: false }
// console.log(Object.keys(user))      //[ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(user))    //[ '123', 'user', false ]
// console.log(Object.entries(user))   //[ [ 'id', '123' ], [ 'name', 'user' ], [ 'isLoggedIn', false ] ]

// console.log(user.hasOwnProperty('isLogged'))    //false


//OBJECTS DE-STRUCTURE

const course={
    name:"JS",
    fee:"1000",
    courseInstructor:"hitesh"
}

course.courseInstructor

//const {courseInstructor}=course
//console.log(courseInstructor)    //hitesh

const {courseInstructor:instructor}=course  //This is called destructure
console.log(instructor)     //hitesh

// const navbar=({company})=>{      //Whenever the curly braces are provided inside the paranthesis then it is "destructuring"   //It is used in react

// }
// navbar(company="youtube")

/*********************   API   **************************/

// {
//     "name":"hitesh",
//     "courseName":"JS",
//     "price":"free"
// }

[
    {},
    {},
    {}
]
