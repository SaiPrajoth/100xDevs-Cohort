// let us understand some async functions

const { error } = require('console');
const fs = require('fs');

// fs.readFile 
console.log("before the fs reading")
fs.readFile('file.txt','utf-8',(error,data)=>{
    if(error){
        throw new Error(`New error encountered : ${error.message}`)
    }
    console.log(data);
})
console.log("after the fs reading");


// setTimeout()
setTimeout(()=>{console.log("This is the message after 5 seconds")},5000);

//setInterval
setInterval(()=>{console.log("this code would execute repeatedly after every 5 seconds")},5000);