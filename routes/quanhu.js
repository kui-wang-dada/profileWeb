var express = require('express')
var router = express.Router()

router.get('/', function (req, res, next) {
    res.render('quanhu/index')
})


module.exports = router;