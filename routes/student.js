/**
 * Created by Danny on 2015/9/29 14:44.
 */
var Student = require("../model/student/Student.js");
var Kecheng = require("../model/student/Kecheng.js");
var express = require('express');
var router = express.Router();


//显示首页
router.get('/', function (req, res, next) {

    Student.find({}, function (err, result) {
        //result就是所有学生数组
        res.render("student/index", {
            "students": result
        });
    });
})

//插入表单
router.get('/add', function (req, res, next) {
    //先要去查询，有多少种课程，然后交付add模板引擎
    Kecheng.find({}, function (err, result) {
        res.render("student/add", {
            "quanbukecheng": result
        });
    });
})

//执行插入
router.get('/doadd', function (req, res, next) {
    //存储数据
    //url是   /doadd?sid=10000&name=小红&sex=男&kechengs=100&kechengs=102
    //req.query就是对象
    //{name: 小红 ,  sex:男，  kechengs:[100,102]}
    Student.create(req.query, function () {
        console.log("插入成功");
        //在课程中添加此人
        Kecheng.tianjiaxuesheng(req.query.Kechengs, req.query.sid, function () {
            res.send("插入成功");
        });
    });
})

//修改
router.get('/edit/:sid', function (req, res, next) {
    //显示修改界面
    var sid = parseInt(req.params["sid"]);

    Student.findOne({"sid": sid}, function (err, result) {
        if (err || !result) {
            res.send("错误");
            return;
        }
        Kecheng.find({}, function (err, result2) {
            res.render("student/edit", {
                "student": result,
                "quanbukecheng": result2
            });
        });
    });
})

//执行修改
router.get('/doedit/:sid', function (req, res, next) {
    //执行修改
    //要改的学生sid
    var sid = parseInt(req.params["sid"]);
    Student.update({"sid": sid}, req.query, function () {
        res.send("修改成功");
    });
})

router.get('/remove/:sid', function (req, res, next) {
    //执行修改
    //要改的学生sid
    var sid = parseInt(req.params["sid"]);
    Student.remove({"sid": sid}, function () {
        res.send("删除成功");
    });
})
module.exports = router