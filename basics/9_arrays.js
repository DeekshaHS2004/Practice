

const heros=["spideman","batman"]
const dc=["thor","ironman"]
// heros.push(dc)
// console.log(heros);  //[ 'spideman', 'batman', [ 'thor', 'ironman' ] ]
// console.log(heros[2][1]);  //ironman
// heros.concat(dc)
// console.log(heros);  //[ 'spideman', 'batman' ]

// const allheros=heros.concat(dc)
// console.log(allheros)  //[ 'spideman', 'batman', 'thor', 'ironman' ]

// const new_heros=[...heros,...dc]
// console.log(new_heros)    //[ 'spideman', 'batman', 'thor', 'ironman' ]

// const another_arr=[1,2,3,[4,[5,6],7],[8,9,[10]]]
// const new_another=another_arr.flat(Infinity)
// console.log(new_another)  //[1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

// console.log(Array.isArray("Deeksha"))   //false
// console.log(Array.from("Deeksha"))      //['D', 'e', 'e','k', 's', 'h','a']
// console.log(Array.from({name:"Deeksha"}))     //[]

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3))     //[ 100, 200, 300 ]