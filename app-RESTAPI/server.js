const express = require('express'); 
const bodyParser = require('body-parser');
const app = express()
const {PORT = 8000} = process.env
// parse aplication/json

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())


app.get('/', (req, res) => {
    res.send('Helo world')
})


app.listen(PORT, () => console.log(`server running in port ${PORT}`))