const express = require('express'); 
const bodyParser = require('body-parser');
const app = express()
const {PORT = 8000} = process.env
const router = require('./route/router')


// parse aplication/json

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// Router
router(app)

app.listen(PORT, () => console.log(`server running in port ${PORT}`))