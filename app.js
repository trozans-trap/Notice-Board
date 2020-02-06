const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.json());

app.use('/api' , require('./routes/api'));


//Db config
const db = require('./config/keys').MongoURI;

//Connect to Mongo
mongoose.connect(db, {useUnifiedTopology: true, useNewUrlParser: true})
 .then(()=> console.log('MongoDb Connected...'))
 .catch(err=> console.log(err));

//middleware for error handling

app.use(function(err,req,res,next){
   res.status(422).send({error: err.message});
});

app.listen(process.env.port || 8800 , function(){
    console.log('now listening for requests');
});