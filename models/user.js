const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema 
const UserSchema = new Schema({
    n:{
        type: String,
        required: [true, 'Name Field is required']
    },
    email: {
        type: String
    },
    mobile:{
        type: Number
    },
    certi:{
        type: String,
        unique: true
    }
});

const User = mongoose.model('user',UserSchema);
module.exports = User;