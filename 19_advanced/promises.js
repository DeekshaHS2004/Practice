const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task is complete")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log('Promise consumed')
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Asyn task 2 is complete")
        resolve()
    },1000)
}).then(function(){
    console.log('Asyn 2 resolved')
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:'me',email:'me@gmail.com'})
    },1000)
})

promiseThree.then(function(user){
    console.log(user)
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        //let error=true   //ERROR:Something went wrong
        let error=false     //me
        if(!error){
            resolve({username:'me',password:'123'})
        }else{
            reject('ERROR:Something went wrong')
        }
    },1000)
})

promiseFour.then((user)=>{
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch((error)=>{
    console.log(error);
}).finally(()=>{
    console.log('Promise is either resolved or rejected')
})


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true    
        if(!error){
            resolve({username:'JS',password:'123'})
        }else{
            reject('ERROR:JS went wrong')
        }
    },1000)
})

//in asyn: catch() is not neatly handled so little bit roblem occurs here
async function consumepromiseFive() {
    try{
        const response=await promiseFive
        console.log(response);
    }catch(error){
        console.log(error);
    }
}
consumepromiseFive()


/*async function getAllUsers() {
    try {
        const response=await fetch('https://jsonplaceholder.typicode.com/users')
        const data=await response.json()
        console.log(data)
    } catch (error) {
        console.log("Error:",error)
    }
}
getAllUsers()*/

//trying with then and catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
}).then((data)=>{
    console.log(data)
}).catch((error)=>
    console.log("Error:",error)
)
