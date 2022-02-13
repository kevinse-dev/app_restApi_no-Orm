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


// controller for Login
exports.login = (req, res) => {
    const post = {
        email: req.body.email,
        password: md5(req.body.password)
    }
    const querySql = `SELECT * FROM user WHERE password='${post.password}' AND email='${post.email}'`

    connection.query(querySql, (err, rows, fields) => {
        if(err) {console.log('err:', err)}

        if(rows.length === 1){
            const token = jwt.sign({rows}, config.secret, {
                expiresIn: 1440
            })
            const data = {
                user_id: rows[0].id,
                access_token: token,
                ip_address: ip.address()
            }

            let addQuerySql = `INSERT INTO ?? SET ?`
            const table = ['akses_token']

            addQuerySql = mysql.format(addQuerySql, table)
            connection.query(addQuerySql, data, (err, rows, fields) => {
                if(err) {console.log('err:',err)}


                res.json({
                    statusCode:200,
                    message:'Token jwt Generated!',
                    token: token,
                    currUser: data.user_id
                })
            })
        }else{
            res.json({
                statusCode:400,
                message:'Email or Password Wrong!'
            })
        }
    })
}

// secure endpoint
exports.dashboard = (req, res) => {
    response.success(res, 'Welcome to the Dashboard')
}