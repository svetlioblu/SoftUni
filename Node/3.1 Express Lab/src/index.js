const express = require('express')
const app = express()


const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')
const homeController = require('./controllers/homeController')

const PORT = 5000

//express config
expressConfig(app)

//config handlebars
handlebarsConfig(app)

//Routes 
app.use(homeController)

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}...`) })