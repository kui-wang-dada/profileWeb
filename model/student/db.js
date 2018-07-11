var mongoose = require('mongoose');
var db_student=mongoose.createConnection('mongodb://localhost:27017/xueshengguanli');

db_student.once('open', function (callback) {
    console.log("student数据库打开");
});

module.exports = db_student;
