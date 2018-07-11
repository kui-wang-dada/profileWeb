var mongoose = require('mongoose')
var db_student = require('./db')
var studentSchema = new mongoose.Schema({
    "sid"  : Number,
    "name" : String,
    "age" : Number,
    "sex" : String,
    "Kechengs" : [Number]   //存放课程的kid
});
//索引
studentSchema.index({ "sid": 1});

//model
var Student = db_student.model("Student",studentSchema);

module.exports = Student;