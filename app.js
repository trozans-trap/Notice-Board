const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

app.use('/api' , require('./routes/api'));

//middleware for error handling

app.use(function(err,req,res,next){
   res.status(422).send({error: err.message});
});

app.listen(process.env.port || 8800 , function(){
    console.log('now listening for requests');
});