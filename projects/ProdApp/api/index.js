const express = require("express");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Item = require("./user");
const cors = require("cors");
const app = express();
const port = 3000;
const salt = bcrypt.genSaltSync(10);

mongoose.connect(
  "mongodb+srv://saiprajoth:d2yh9dwtW9MGF9AF@prodapp-database.aaxvnge.mongodb.net/"
);

//mongodb+srv://<username>:<password>@prodapp-database.aaxvnge.mongodb.net/
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.post("/register", async (req, res) => {
  const username = req.body.username;
  const password = String(req.body.password); //6
  const Hash = bcrypt.hashSync(password, salt);

  try {
    const NewUser = new Item({ username, Hash });
    await NewUser.save();
    res.status(200).json("Registration successfull, please try login");
  } catch (error) {
    // if (error.name === "MongoError" && error.code === 11000) { 8.// this is a more general kind of error handling
    //   res
    //     .status(400)
    //     .json({ error: "Duplicate entry. This item already exists." });
    // } else {
    //   res.status(500).send(error.message);
    // }

    // Handle duplicate key error on "username" field
    if (error.code === 11000 && error.keyPattern.username) {
      // this is kind of more specific with the fields which violate the unique property
      res
        .status(400)
        .json( 'Username already exists. Please choose a different one.');
    } else {
      res.status(500).send(error.message);
    }
  }
});

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = String(req.body.password);
  const userDoc = Item.findOne({ username: "username" });
  if (userDoc == null) {
    console.log("The username doesn't exist");
    res.status(400).json("The username doesn't exist, please try registering");
  } else {
    const compare = await bcrypt.compare(password, String(userDoc.password));
    if (compare) {
      jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
        if (err) throw err;
        res.cookie("token", token).status(200).json(token);
      });
    } else {
      console.log("incorrect password");
      res
        .status(400)
        .json(
          "Incorrect Password"
        );
    }
  }
});

app.listen(3000);

//d2yh9dwtW9MGF9AF
