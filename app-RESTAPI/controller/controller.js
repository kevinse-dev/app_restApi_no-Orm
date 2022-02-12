'use strict'

const response = require('../response')
const connect = require('../connect_db')

exports.index = (req, res) => {
    response.success(res, 'mysql connected!')
}