const express = require("express");
const mongojs = require("mongojs");
const { Mongoose } = require("mongoose");

//library that logs data
//express middleware
//everytimes when server breaks or throws exception, morgan logs it automatically
//below creating instance for morgan
const logger = require("morgan");

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

Mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/userdb",{ useNewUrlParser: true });

// connecting to database
//creating new instance of mongoDB using mongojs library
const db = mongojs(databaseUrl, collections);
db.on("error",error => {
    console.log("Database error:", error);
});

