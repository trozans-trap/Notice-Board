const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

<<<<<<< HEAD

=======
>>>>>>> c40fbfe895f8c89f7dd9e88c800b857f9854b32c

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
