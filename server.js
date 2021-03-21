const express = require("express");
const mongoose  = require("mongoose");
//library that logs data
//express middleware
//everytimes when server breaks or throws exception, morgan logs it automatically
//below creating instance for morgan
const logger = require("morgan");


const PORT = process.env.PORT || 3000;


const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout",
{ useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
  
});

//routes 
// app.use(require("./routes/apiRoutes"));
app.use(require("./routes/htmlRoutes"));



// connecting to database
//creating new instance of mongoDB using mongojs library
app.listen(PORT, ()=> {
    console.log(`App running on port ${PORT} `);
})
