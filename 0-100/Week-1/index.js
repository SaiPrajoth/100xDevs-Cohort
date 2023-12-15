const { error } = require('console');
const fs = require('fs');







// asynchronous fs.readFile 


console.log("before the fs reading")
fs.readFile('a.txt','utf-8',(error,data)=>{
    if(error){
        throw new Error(`New error encountered : ${error.message}`)
    }
    console.log(data);
})
console.log("after the fs reading")
