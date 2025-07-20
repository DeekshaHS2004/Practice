//Arrays

const myArr=[0,1,2,3,4,5]
const myHeros=['Shakthiman','spiderman']

const myArr2=new Array(1,2,3,4,5)
// console.log(myArr[1])


//Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(1))
// console.log(myArr.indexOf(2))

const newArr=myArr.join()
// console.log(newArr)
// console.log(typeof newArr)  //string

//slice,splice

console.log("A ",myArr)
const myn=myArr.slice(1,3)  //range is not included
console.log(myn)
console.log("B ",myArr)

const myn1=myArr.splice(1,3)  //range is included
console.log("C ",myArr)
console.log(myn1)

