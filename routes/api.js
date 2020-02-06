const express = require('express');
const router = express.Router();
const User = require('../models/user');

const upload = require('../image');

const singleUpload = upload.single('image');

router.post('/image-upload',function(req,res,next){
     singleUpload(req,res, (err)=>{
        const doclink = req.file.location;
        const { heading,description,date,lastdate,department }= req.body;
        const newUser= new User({
            heading,
            description,
            date,
            lastdate,
            department,
            doclink
        });
        newUser.save().then((person)=>{
            res.send(person);
        }).catch(next);
     });
     
    
});

module.exports = router;