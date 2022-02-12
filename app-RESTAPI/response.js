'use strict'

exports.success = (res, data) => {
    const response = {
        'status' : 200,
        'message': data
    }

    res.json(response)
    res.end()
}