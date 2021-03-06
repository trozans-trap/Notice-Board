const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema 
const NoticeSchema = new Schema({
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
        type: [String],
        required: true
    },
    year: {
        type: [Number],
        required: true
    },
    doclink:{
        type: String
    }
    
});

const Notice = mongoose.model('notices',NoticeSchema);
module.exports = Notice;