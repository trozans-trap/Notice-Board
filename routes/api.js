const express = require('express');
const router = express.Router();
const User = require('../models/user');

const upload = require('../image');

const singleUpload = upload.single('image');

router.post('/image-upload',function(req,res,next){
     singleUpload(req,res, (err)=>{
         return res.json({'imageUrl': req.file});
     });
     User.create(req.body).then(function(person){
        res.send(person);  
      }).catch(next);
});

module.exports = router;