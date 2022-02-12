'use strict'

module.exports = (app) => {
    const controller = require('../controller/controller')

    app.route('/').get(controller.index)
    app.route('/mahasiswa').get(controller.findAll)
}