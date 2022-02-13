'use strict'

exports.success = (res, data) => {
    const response = {
        'status' : 200,
        'message': data
    }

    res.json(response)
    res.end()
}

exports.filed = (res, statusCode, message) => {
    const response = {
        'status': statusCode,
        'message': message
    }
    res.json(response)
    res.end()
}