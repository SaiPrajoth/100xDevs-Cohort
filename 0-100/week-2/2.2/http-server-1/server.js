const express = require('express')
const fs = require('fs')
// importing the express library
const app = express() // creating express object
const port = 3000 // the port on which the server would be initiate

const uniqueId = () => {
  const dateString = Date.now().toString(36);
  const randomness = Math.random().toString(36).substr(2);
  return dateString + randomness;
};

class ToDo {
  constructor(todo) {
    this.todo = todo;
    this.id = uniqueId();
  }
}

app.post('/create',(req,res)=>{
  let title = req.headers.title;
  let NewTodo = new ToDo(title);
  fs.readFile('database.json','utf8',(err,data)=>{
    if(err){
      res.status(404).send("Error occured in reading the file: ", err )
    }else{
      let NewData = JSON.parse(data);
      NewData.push(NewTodo);
      
      fs.writeFile('database.json',JSON.stringify(NewData),(err)=>{
        if(err){
          res.status(404).send("Error occured in writing to the file: ", err )
        }else{
          res.status(200).send("ToDo successfully created")
        }
      })
    }
  })
  //create todo
})

app.get('/read', (req, res) => { // Read a todo
  fs.readFile('database.json','utf8',(err,data)=>{
    if(err){
      res.send(404,"Error occured in reading the file: "+ err)
      // res.status(404).send("Error occured in reading the file: ", err)
    }else{
      res.status(200).send(JSON.parse(data));
    }

  })
})

app.put('/update',(req,res)=>{
  let title = req.headers.title;
  let id = req.headers.id;
  let NewData = JSON.parse(fs.readFileSync('database.json','utf-8'));

  // fs.readFileSync('database.json','utf8',(err,data)=>{
  //   if(err){
  //     res.status(404).send("Error occured in reading the file: ", err )
  //   }else{
  //     NewData = JSON.parse(data);
  //   }
  // });
  
  const index = NewData.findIndex((element) => element.id == id);
  NewData[index].todo=title;
  console.log(NewData)
  if(index==-1){
    res.status(404).send("No todo found for the given id");
  }else{
    fs.writeFile('database.json',JSON.stringify(NewData),(err)=>{
      if(err){
        res.status(404).send("Error occured in writing to the file: ", err )
      }else{
        
        res.status(200).send("ToDo successfully updated")
      }
    })
  }
 
  //update a todo
})

app.delete('/delete',(req,res)=>{
  let id = req.headers.id;
  let NewData = JSON.parse(fs.readFileSync('database.json','utf-8'));

  // fs.readFileSync('database.json','utf8',(err,data)=>{
  //   if(err){
  //     res.status(404).send("Error occured in reading the file: ", err )
  //   }else{
  //     NewData = JSON.parse(data);
  //   }
  // });
  
  const index = NewData.findIndex((element) => element.id == id);
  NewData.splice(index,1);

  // console.log(NewData)
  if(index==-1){
    res.status(404).send("No todo found for the given id");
  }else{
    fs.writeFile('database.json',JSON.stringify(NewData),(err)=>{
      if(err){
        res.status(404).send("Error occured in writing to the file: ", err )
      }else{
        
        res.status(200).send("ToDo successfully deleted")
      }
    })
  }


  //delete a todo
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})