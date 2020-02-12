const express = require('express');
const router = express.Router();
const User = require('../models/user');

const upload = require('../image');

const singleUpload = upload.single('image');

router.get('/image-upload', function(req,res,next){
    //get all images
    User.findOne({heading: req.body.heading}).then(function(person){
        res.send(person);
    });
});

router.post('/image-upload',function(req,res,next){
     singleUpload(req,res, (err)=>{
        const doclink = req.file.location;
        const { heading,description,date,lastdate,department,section }= req.body;
        const newUser= new User({
            heading,
            description,
            date,
            lastdate,
            department,
            doclink,
            section
        });
        newUser.save().then((person)=>{
            res.send(person);
        }).catch(next);
     });  
});

router.put('/image-upload',function(req,res,next){
    User.findOneAndUpdate({heading: req.body.heading}).then((person)=>{

        singleUpload(req,res, (err)=>{
            const doclink = req.file.location;
            const { heading,description,date,lastdate,department,section }= req.body;
            const newUser= new User({
                heading,
                description,
                date,
                lastdate,
                department,
                doclink,
                section
            });
            newUser.save().then((person)=>{
                res.send(person);
            }).catch(next);
         });  

       
    });
});

router.delete('/image-upload',(req,res,next)=>{
    User.findOneAndRemove({heading: req.body.heading}).then((person)=>{
        res.send(person);
    });
});

module.exports = router;