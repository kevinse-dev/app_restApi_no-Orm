const connection = require('../connect_db')
const mysql = require('mysql')
const md5 = require('md5')
const response = require('../response')
const jwt = require('jsonwebtoken')
const config = require('../config/secret')
const ip = require('ip')

// controller Register
exports.registrasi = (req, res) => {
    const post = {
        username: req.body.username,
        email: req.body.email,
        password: md5(req.body.password),
        role: req.body.role,
        tanggal_daftar: new Date()
    }

    // if email already in database
    const querySql = `SELECT email FROM user WHERE email = '${post.email}'`

    connection.query(querySql, (err, rows, fields) => {
        if(err) {console.log('err:', err)}

        if(rows.length === 0){
            let addQuerySql = 'INSERT INTO ?? SET ?'
            const table = ['user']
            addQuerySql = mysql.format(addQuerySql, table)

            connection.query(addQuerySql,post, (err, rows, fields) => {
                if(err) {console.log('err:',err)}

                response.success(res, 'add user success!')
            })
        }else{
            response.filed(res, 400, 'email or password already exist!')
        }
    })

}