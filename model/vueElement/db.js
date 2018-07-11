var mongoose = require('mongoose')
var db_vueElement=mongoose.createConnection('mongodb://localhost:27017/vueElement');

db_vueElement.once('open', function (callback) {
    console.log("vueElement数据库打开");
});
module.exports=db_vueElement