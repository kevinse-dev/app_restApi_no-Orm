'use strict'

const response = require('../response')
const connect = require('../connect_db')

exports.index = (req, res) => {
    response.success(res, 'mysql connected!')
}

// show all mahasiswa

exports.findAll = (req, res) => {
    const querySql = `SELECT * FROM mahasiswa`

    connect.query(querySql, (err, rows, fields) => {
        if(err) {console.log('err:' , err)}
        response.success(res, rows)
    })
}

// show mahasiswa by id

exports.findOne = (req, res) => {
    const id = req.params.id
    const querySql = `SELECT * FROM mahasiswa WHERE id = ${id}`

    connect.query(querySql, (err, rows, fields) => {
        if(err) {console.log('err:', err)}

        if(rows.length > 0){
            response.success(res, rows)
        }else{
            response.filed(res, 400, 'data yang anda cari tidak di temukan!')
        }
    })
}

// create mahasisa
exports.create = (req, res) => {

    const nim = req.body.nim
    const nama = req.body.nama
    const jurusan = req.body.jurusan

    const querySql = `INSERT INTO mahasiswa(nim,nama,jurusan) VALUES(${nim},'${nama}', '${jurusan}')`

    connect.query(querySql, (err, rows, fields) => {
        if(err) {console.log('err:', err)}
        response.success(res, 'create data success!')
    })
}