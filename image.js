const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey:'+OHE2q4GvKvtrDYcb5kulS7KhBCnutpIwOAgXHXp',
    accessKeyId: 'AKIAJMUJD7RWUUHDA54A',
    region: 'ap-south-1'
});

const s3 = new aws.S3();
 
const upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'datapackets',
    acl: 'public-read',
    metadata: function (req, file, cb) {
      cb(null, {fieldName: 'TESTING_META_DATA'});
    },
    key: function (req, file, cb) {
      cb(null, Date.now().toString() + file.originalname)
    }
  })
})

module.exports=upload;