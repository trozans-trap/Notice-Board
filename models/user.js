const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema 
const UserSchema = new Schema({
    heading:{
        type: String,
        required: true

    },
    description: {
        type: String,
        // required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    lastdate:{
        type: Date
    },
    department:{
        type: String,
        required: true
    },
    section:{
        type: String,
        required: true
    },
    doclink:{
        type: String
    },
    year: {
        type: Number
    }
});

const User = mongoose.model('user',UserSchema);
module.exports = User;