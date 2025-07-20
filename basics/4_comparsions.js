// console.log("2">1)  //true
// console.log("02">1)  //true
// console.log(null>0)  //false
// console.log(null>=0)  //true
// console.log(null==0)  //false
// console.log(null<0)  //false
// console.log(null<=0)  //true

console.log(undefined>0)
console.log(undefined<0)
console.log(undefined==0)
console.log(undefined>=0)
console.log(undefined<=0)
//all are false

// ===  => strict check:It won't convert datatypes to other datatypes as above
console.log("2"===2)  //false