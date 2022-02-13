'use strict'

module.exports = (app) => {
    const controller = require('../controller/controller')

    const urlApi = '/api/v1/'

    app.route(`${urlApi}`).get(controller.index)
    app.route(`${urlApi}mahasiswa`).get(controller.findAll)
    app.route(`${urlApi}mahasiswa/:id`).get(controller.findOne)
    app.route(`${urlApi}add/mahasiswa`).post(controller.create)
}