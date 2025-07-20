const name="deeksha"
const count=12
// console.log(name+count+" is good");
console.log(`Hello my name is ${name} and count is${count}`);
const game=new String('deeksha-1')

//Methods
console.log(game[0])
console.log(game.__proto__)
console.log(game.length)
console.log(game.toUpperCase())
console.log(game.charAt(2))
console.log(game.indexOf('k'))

const newstring=game.substring(0,4)
console.log(newstring)

const another=game.slice(0,4)
console.log(another)

const another1=game.slice(-8,3)
console.log(another1)

const another2="    deeksha     "
console.log(another2)
console.log(another2.trim())

const url="deeksha@gmail.com"
console.log(url.replace('gmail','yahoo'))
console.log(url.includes('deeksha'))

console.log(game.split('-'))