const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

class user {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }
}

app.post("/sign-up", async (req, res) => {
  let username = req.headers.username;
  let password = req.headers.password;
  let user_credentials = new user(username, password);

  let data = fs.readFileSync('database.json');
  data[0].push(user_credentials);
  let data_JSON = JSON.parse(data);
  

  fs.writeFile('database.json',JSON.stringify(data_JSON),(err,data)=>{
    if(err){
        res.status(400).send("There is an error")
    }else{
        res.status(200).send('Sign up success')
    }
  })
 
});

app.get("/sign-in", (req, res) => {});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
