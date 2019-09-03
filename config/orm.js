const connection = require("../config/connection.js")




var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = `SELECT * FROM ${tableInput};`
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result)
        });
    },
    insertOne: function(tableInput, name, eaten, cb){
        var queryString = `INSERT INTO ${tableInput}(burger_name, devoured) `
        queryString += `VALUES ("${name}", ${eaten})`
        console.log(queryString)
        connection.query(queryString, function(err, result){
            if (err) throw err
            cb(result)
        })
    },
    updateOne: function(tableInput, id, val, cb){
        var queryString = `UPDATE ${tableInput} SET devoured = ${val} WHERE id = ${id}`
        console.log(queryString)
        connection.query(queryString, function(err, result){
            if (err) throw err;
            cb(result)
        })
    }
}

module.exports = orm