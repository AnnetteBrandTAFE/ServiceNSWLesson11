function wait(waitTime) { //wait is a promise
    return new Promise(( resolve, reject) => {
        if(isNaN(waitTime)) {
            reject (new Error("waitTime must be a number"));
        } else {
            setTimeout (() => {
                resolve(`You have waited ${waitTime} milliseconds`);
            }, waitTime)
        }
    
});
}
wait(10000).then((response) => { // if you write it like let myResult = wait(10000).then((response)) => { then it will log Promise {<pending>}. Once the timelimit is up it will log You have waited 10000 milliseconds
    console.log(response);
}).catch((error) => { //this will bring up an error message if you put something other than a number in the brackets next to wait. line 13
    console.log(error.message); 
    console.log(myResult)
})

//another option when you are using the boiler plate
async function Program (){
let myResult = await wait(10000);
console.log(myResult);
}

