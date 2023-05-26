const express = require('express')


const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')

const app = express()
const PORT = 5000

//express config
expressConfig(app)

//config handlebars
handlebarsConfig(app)

//Routes 
app.get('/', (req, res) => {
    res.render('home')

})
app.listen(PORT, () => { console.log(`Server listening on port ${PORT}...`) })