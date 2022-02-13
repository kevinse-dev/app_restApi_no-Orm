const express = require('express'); 
const bodyParser = require('body-parser');
const morgan = require('morgan')
const app = express()
const {PORT = 8000} = process.env
const router = require('./route/router')



// parse aplication/json

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(morgan('dev'))


// Router
router(app)

// Router middleware
app.use('/auth', require('./middleware'))

app.listen(PORT, () => console.log(`server running in port ${PORT}`))