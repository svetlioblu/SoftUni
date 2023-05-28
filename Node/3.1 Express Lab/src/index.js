const express = require('express')
const app = express()


const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')
const router = require('./routs')


const PORT = 5000

//express config
expressConfig(app)

//config handlebars
handlebarsConfig(app)

//Routes (Modular Routes)
app.use(router)


app.listen(PORT, () => { console.log(`Server listening on port ${PORT}...`) })