const express = require('express');
const app = express();
const cors = require('cors');

//Middlewares
app.use(cors());
app.use(express.json());//req.body

//Importing routes
const questionEditRouter = require('./routes/questions.route');
app.use("/questions", questionEditRouter);

//Default Response
app.use("/", (req, res)=>{
    res.send("Invalid URL");
});

module.exports = app;