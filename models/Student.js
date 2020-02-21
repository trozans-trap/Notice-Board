const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: {
        type: String
    },
    stdNo: {
        type: Number
    },
    rollNo: {
        type: Number
    },
    branch: {
        type: String
    },
    year: {
        type: Number
    }   
});


const Student = mongoose.model('Student', StudentSchema);
module.exports = Student;