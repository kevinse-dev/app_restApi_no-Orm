'use strict'

const response = require('../response')
const connect = require('../connect_db')

exports.index = (req, res) => {
    response.success(res, 'mysql connected!')
}

exports.findAll = (req, res) => {
    const querySql = `SELECT * FROM mahasiswa`

    connect.query(querySql, (err, rows, fields) => {
        if(err) {console.log('err:' , err)}
        response.success(res, rows)
    })
}