const express = require('express');
//const mongoose = require('mongoose');
const {connectMongoDB} = require("./connection")
const bodyParser = require('body-parser');
const { route } = require('./routes/user');
const userRouter = require('./routes/user')
const app = express();
const port = 8000;
const {logReqRes,reqfilter} = require ('./middlewares/index')// Middleware

//middleware
app.use(bodyParser.json());
app.use((req, res, next)=> {
  logReqRes('log.txt')(req, res, next);
  reqfilter;
})

// Connect to MongoDB
connectMongoDB('mongodb://localhost:27017/crudexample')
.then(()=> console.log('mongoDB connected'));


// Routes
app.use("/api/employees",userRouter);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
