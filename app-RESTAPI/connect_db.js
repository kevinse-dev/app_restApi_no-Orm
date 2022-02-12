const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'db_restapi',
})

db.connect(err => {
    if(err) console.log('err:', err);
    console.log('database connected');
})

module.exports = db
