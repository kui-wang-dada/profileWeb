var mongoose = require('mongoose');
var db_vueElement = require('./db')

var DataSchema = new mongoose.Schema({
    id: Number,
    recordsTotal: Number,
    recordsFiltered: Number,
    data: [{}],
});

DataSchema.methods.showInfo = function () {
    console.log(this.id);
}

var DataModel = db_vueElement.model('Data', DataSchema);

module.exports = DataModel