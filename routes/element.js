"use strict"

var express = require('express');
var router = express.Router();
var dbData = require('../model/vueElement/dataSchema')

const admin = {
    roles: ['admin'],
    token: 'admin',
    introduction: '我是超级管理员',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
}
/* GET home page. */
// 登录
router.get('/',function (req,res,next) {
    res.render('vueElement/index')
})
router.post('/login/login', function (req, res, next) {
    res.json(admin)
})
// 用户信息
router.get('/user/info', function (req, res, next) {
    res.json(admin)
    //   res.render('index', { title: 'Express' });
});
// 初始化渲染+查询
router.get('/article/list', function (req, res, next) {
    let listQuery = req.query
    console.log(listQuery)
    let pageIndex = parseInt(listQuery.pageIndex)
    let title = listQuery.title
    let limit = parseInt(listQuery.limit)
    let sort = parseInt(listQuery.sort)
    let skip = parseInt(listQuery.page - 1) * limit
    if (title) {
        let titleRex = new RegExp(title)
        dbData.aggregate([
            { '$match': { 'id': pageIndex } },
            { '$project': { '_id': 1, 'data': 1 } },
            { '$unwind': '$data' },
            { '$match': { 'data.name': titleRex } },
            { '$group': { '_id': '$_id', 'data': { '$push': '$data' } } }
        ], function (err, result) {
            if (err) {
                console.log(err)
                return
            }
            console.log(skip)
            console.log(limit)
            console.log(result)
            if (result[0]) {
                result[0].data = result[0].data.slice(skip, skip + limit)
                res.json(result[0])
            } else {
                return
            }

        })
    } else {
        dbData.find({ id: pageIndex }, function (err, result) {
            console.log(skip)
            console.log(limit)
            result[0].data = result[0].data.slice(skip, skip + limit)
            console.log(result[0].data)
            res.json(result[0])
        })
    }

    //   res.render('index', { title: 'Express' });
});
// 修改
router.post('/article/update', function (req, res, next) {
    let body = req.body
    console.log(body)
    let pageIndex
    let type
    if (body.type) {
        type = body.type
        delete body.type
    }
    if (body.pageIndex) {
        pageIndex = parseInt(body.pageIndex)
        delete body.pageIndex
    }
    let id = body.id - 1
    dbData.findOne(
        { id: pageIndex },
        function (err, doc) {
            let data = {}
            if (type == 'update') {
                doc.data[id] = body
            } else if (type = 'create') {
                let idAdd = doc.data.length + 1
                body.id = idAdd
                doc.data.unshift(body)
            }
            data = doc.data
            console.log(data)
            dbData.update(
                { id: pageIndex },
                { $set: { data: data } },
                (err, res) => {
                if (err) console.log(err)
            if (res) console.log(res)
        }
        )
        }
    )
    res.end()

})
router.post('/article/delete', function (req, res, next) {
    let body = req.body
    console.log(body)
    let pageIndex
    let type
    if (body.type) {
        type = body.type
        delete body.type
    }
    if (body.pageIndex) {
        pageIndex = parseInt(body.pageIndex)
        delete body.pageIndex
    }
    let id = body.id
    dbData.findOne(
        { id: pageIndex },
        function (err, doc) {
            let data = {}
            for (const v of doc.data) {
                if (v.id === id) {
                    const index = doc.data.indexOf(v)
                    doc.data.splice(index, 1)
                    break;
                }
            }
            data = doc.data
            console.log(data)
            dbData.update(
                { id: pageIndex },
                { $set: { data: data } },
                (err, res) => {
                if (err) console.log(err)
            if (res) console.log(res)
        }
        )
        }
    )
    res.end()
});
module.exports = router;
