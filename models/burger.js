const orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    },
    create: function(name, eaten, cb){
        orm.insertOne("burgers", name, eaten, function(res){
            cb(res)
        })
    },
    update: function(id, val, cb){
        orm.updateOne("burgers", id, val, function(res){
            cb(res)
        })
    }
}

module.exports = burger