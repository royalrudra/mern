const express = require("express");
const mongoose = require('mongoose');

const app = express();


// DB config
const db = require('./config/key').mongoURI;


//connect to MOngoDB
mongoose.connect(db)
.then(()=>console.log("MongoDB connected"))
.catch(err=> console.log("error on ther ",err))

 app.get("/", (req,res)=> res.send("hello world, i ma lerning react node express"));
 
 const port = process.env.PORT || 5000;

 app.listen(port, () =>console.log(`server running on port ${port}`));
