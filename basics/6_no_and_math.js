const score=400
// console.log(score);  //400
// console.log(typeof score);  //number

const balance=new Number(100)
// console.log(balance)  //[Number:100]
// console.log(typeof balance)  //object

// console.log(balance.toString().length)  //3
// console.log(balance.toFixed(2))  //100.00

const balance1=236.8726
// console.log(balance1.toPrecision(3))  //237

const hundred=100000
// console.log(hundred.toLocaleString('en-US'));  //100,000
// console.log(hundred.toLocaleString('en-IN'));  //1,00,000


/**************************************MATHS**************************************** */
// console.log(Math);
// console.log(Math.abs(-4));  //4
// console.log(Math.round(4.3));  //4
// console.log(Math.ceil(4.3));  //5
// console.log(Math.floor(4.9));  //4
// console.log(Math.min(2,3,4,5));  //2
// console.log(Math.max(2,3,4,5));  //5

// console.log(Math.random());   //Generates random number
// console.log(Math.random()*10);  //Generates random number b/w 1 & 10
// console.log((Math.floor(Math.random()*10))+1);  ///6

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);
