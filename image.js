const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    secretAccessKey:'ivbW/f2VTH3KDBQdwiDBQZ8szEVYv9Ae5tmcnw4r',
    accessKeyId: 'AKIAJOYHBW4A7XLGKDAA',
    region: 'us-east-2'
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