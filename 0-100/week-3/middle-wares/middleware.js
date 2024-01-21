// 1. Middle wares used for two purposes A. For User Authentication B. For  Input Validation 

// 2. the code for meeting the doctor
// Lets add some constraints
// lets add a kidneyId for the patient, 1-2 for one and two kidneys respctivly.
// query params - user names and passwords

function MiddleWare1(req,res,next){
    let username = req.headers.username;
    let password = req.headers.password;
    if(username!="Sai" || password!="pass"){
        res.status(403).json([{
            "msg":"User Authentication failed"
        }
        ])
        return;
    }else{
        next();
    }
}
function MiddleWare2(req,res,next){
    let kidneyId = req.params.kidneyId;
    if(kidneyId!=1&& kidneyId!=2){
        res.status(411).json([{
            "msg":"Input validation failed"
        }
        ])
        return;
    }else{
        next();
    }
}


const express = require('express')
const app = express()
const port = 3000

app.get('/checkup/:kidneyId',MiddleWare1,MiddleWare2, (req, res) => {
    let kidneyId = req.params.kidneyId;
    // let username = req.headers.username;
    // let password = req.headers.password;
    // console.log(username);
    // console.log(password);

    // 3. below is the ugly way of writing middle ware code

    /* 
    if(username!="Sai" || password!="pass"){
    res.status(403).json([{
        "msg":"User Authentication failed"
    }
    ])
    return;
}

if(kidneyId!=1&& kidneyId!=2){
    res.status(411).json([{
        "msg":"Input validation failed"
    }
    ])
    return;
}
    
    */


// 4.let us try a better of handling them, have created some functions above to use here, check them out and proceed further, check the modified call back functions in the route syntax as parameters.
// 5. You can add more than one call back functions, the last one being the eventual function in a route
// 6. How would the next call back function intiate or will be called after the the first callback function is called, we introduce the next() function here.
// 7. next() would pass the control to the next following functions or routes, for this you have to add the next function as a third parameter in middleware syntax while writing them. please check they are added. 
// 8. for the authentication, we use the logic and check if the authentication is successfull. if yes, we will call next() which will pass the control to the next callback or Route, if not the authentication failed message will be responded. Same for the input validation.


    res.send(`Hello, you have ${kidneyId} lollll`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
