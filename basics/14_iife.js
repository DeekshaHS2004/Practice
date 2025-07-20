//IIFE
//Immediately Inverted Function Expressions

/*
function chai(){
    console.log(`DB CONNECTED`)
}
chai()      //DB CONNECTED
*/


//Named IIFE
(function chai1(){
    console.log(`DB CONNECTED`)     //DB CONNECTED
})();       //semicolon used to end the funtion

// ()()  //()->function definition     //()->function execution

//Unnamed IIFE
(()=>{
    console.log(`DB CONNECTED TWO`)     //DB CONNECTED TWO
})();


//Unnamed IIFE
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`)     //DB CONNECTED TWO deeksha
})('deeksha')

