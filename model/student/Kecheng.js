/**
 * Created by Danny on 2015/9/29 14:50.
 */
var mongoose = require('mongoose');
var db_student = require('./db')


//schema
var kechengSchema = new mongoose.Schema({
    "kid": Number,
    "name": String,
    "students": [Number]       //这个数组存放的是学生的sid
});
//索引
kechengSchema.index({ "kid": 1 });

kechengSchema.statics.tianjiaxuesheng = function (kidarray, sid, callback) {
    for (var i = 0; i < kidarray.length; i++) {
        Kecheng.update({ "kid": kidarray[i] }, { $push: { "students": sid } }, function () {
            console.log("课程添加报名学生成功");
        })
    }
    callback()
}


//model
var Kecheng = db_student.model("Kecheng", kechengSchema);

// Kecheng.create({"kid": 1001,"name": '数学', "students": [] },function(err,docs){
//     if(err)console.log(err);
//     console.log('数学保存成功')
// })
// Kecheng.create({"kid": 1002,"name": '语文', "students": [] },function(err,docs){
//     if(err)console.log(err);
//     console.log('语文保存成功')
// })
// Kecheng.create({"kid": 1003,"name": '英语', "students": [] },function(err,docs){
//     if(err)console.log(err);
//     console.log('英语保存成功')
// })
// Kecheng.create({"kid": 1004,"name": '物理', "students": [] },function(err,docs){
//     if(err)console.log(err);
//     console.log('物理保存成功')
// })

module.exports = Kecheng;