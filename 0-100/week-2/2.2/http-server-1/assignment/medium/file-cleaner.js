let fs = require('fs');
let fileCleaner=()=>{
    // let string ="";
    let data = String(fs.readFileSync('file.txt'));
    data = data.replace(/\s+/g, " ");
    data = data.trim();
    console.log(data);
    // fs.readFileSync('file.txt','utf-8',(err,data)=>{
    //     if(err){
    //         console.log(err);
    //     }else{
    //         try{
    //             string = data;
    //             console.log(string);
    //             string = string.replace(/\s+/g, " ");
    //             string = string.trim()
    //             console.log(string)
    //             }catch(err){
    //                 console.log("there is an error", err)
    //             }
    //     }
       
    // })
    fs.writeFile('file.txt',data,'utf-8',()=>{
        console.log("File is successfully cleaned")
    })
}

fileCleaner();
