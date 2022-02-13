'use strict'

module.exports = (app) => {
    const controller = require('../controller/controller')

    const urlApi = '/api/v1/'

    app.route(`${urlApi}`).get(controller.index)
    app.route(`${urlApi}mahasiswa`).get(controller.findAll)
    app.route(`${urlApi}mahasiswa/:id`).get(controller.findOne)
    app.route(`${urlApi}add/mahasiswa`).post(controller.create)
    app.route(`${urlApi}update/mahasiswa/:id`).put(controller.update)
    app.route(`${urlApi}delete/mahasiswa/:id`).delete(controller.delete)
    app.route(`${urlApi}mahasiswa&matakuliah`).get(controller.getAllNested)
}