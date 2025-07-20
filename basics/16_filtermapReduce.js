
/*
const lang=["js","c","c++","java"]

const val=lang.forEach((item)=>{
    console.log(item)   //js    c   c++     java
    return item
})
console.log(val)    //undefined
*/


//FILTERS
const num=[1,2,3,4,5,6,7,8,9]
// const newN=num.filter((num)=>num>4)
// console.log(newN)   //[ 5, 6, 7, 8, 9 ]

const newN=num.filter((num)=>{
    return num>4
})
// console.log(newN)   //[ 5, 6, 7, 8, 9 ]

//using forEach loop 
//the difference is in forEach loop we need to give condition but in filters no need to give any condition
/*
const n=[]
num.forEach((num1)=>{
    if(num1>4){
        n.push(num1)
    }
})
console.log(n)  //[ 5, 6, 7, 8, 9 ]
*/

const books=[
    {
        title:'book1',genre:'fiction',publish:1990
    },
    {
        title:'book2',genre:'non-fiction',publish:1991
    },
    {
        title:'book3',genre:'science',publish:1992
    },
    {
        title:'book4',genre:'history',publish:1993
    },
    {
        title:'book5',genre:'novel',publish:1994
    },
]

let userBooks=books.filter((bk)=>bk.genre==='history')
// console.log(userBooks)      //[ { title: 'book4', genre: 'history', publish: 1993 } ]
userBooks=books.filter((bk)=>{return bk.publish>=2000})     //or userBooks=books.filter((bk)=>bk.publish>=2000)
// console.log(userBooks)      //[]
userBooks=books.filter((bk)=>{return bk.publish>1993}) 
// console.log(userBooks)      //[ { title: 'book5', genre: 'novel', publish: 1994 } ]


//MAPS

const myNum=[1,2,3,4,5]
const newNum=myNum.map((num)=>num+10)
//or const newNum=myNum.map((num)=>{return num+10})
// console.log(newNum)     //[ 11, 12, 13, 14, 15 ]

const newNum1=myNum.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>=40)
// console.log(newNum1)    //[ 41, 51]


//REDUCE
const arr=[1,2,3]
/*
const myArr=arr.reduce(function(accmulator,current){
    console.log(`acc:${accmulator} + cur:${current}`);
    return accmulator+current
    //return accmulator+current,2 //2
})
//},4)      //10    If i give any number here then it will get added to the to the sum given by array
console.log(myArr)
*/
/*
acc:1 + cur:2
acc:3 + cur:3
6
*/

const myArr=arr.reduce((acc,cur)=>acc+cur)
// console.log(myArr)      //6

const shoppingCart=[
    {
        itemName:"java course",
        price:3000
    },
    {
        itemName:"py course",
        price:2000
    },
    {
        itemName:"js course",
        price:1000
    }
]
const total=shoppingCart.reduce((acc,item)=>acc+item.price,0)
console.log(total)      //6000




