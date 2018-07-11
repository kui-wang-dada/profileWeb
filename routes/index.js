/**
 * Created by Danny on 2015/9/29 14:44.
 */
var Student = require("../model/student/Student.js");
var Kecheng = require("../model/student/Kecheng.js");
var express = require('express');
var router = express.Router();

//显示首页
router.get('/', function(req, res, next) {
    res.render('index')
    // Student.find({},function(err,result){
    //     //result就是所有学生数组
    //     res.render("student/index",{
    //         "students" : result
    //     });
    // });
})

module.exports=router