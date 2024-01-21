const express = require('express');
const { CreateTodo, UpdateTodo } = require('./types');
const app = express();
const port = 3000;

app.use(express.json())

app.post('/addTodo',(req,res)=>{
    const body = req.body;
    const parsedResponse = CreateTodo.safeParse(body); // this function will give an object if the format of input matches the specified one.
    if(!parsedResponse.success){
        res.status(411).json("invalid input types")
    }else{

    }
    
})

app.put('/completeTodo',(req,res)=>{
    const body = req.body;
    const parsedResponse = UpdateTodo.safeParse(body); // this function will give an object if the format of input matches the specified one.
    if(!parsedResponse.success){
        res.status(411).json("invalid input type(s)")
    }else{

    }
})

app.get('/showTodo',(req,res)=>{

})

app.delete('deleteTodo',(req,res)=>{

})