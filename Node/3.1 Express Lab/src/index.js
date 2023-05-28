const express = require('express')
const app = express()


const expressConfig = require('./config/expressConfig')
const handlebarsConfig = require('./config/handlebarsConfig')
const homeController = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')

const PORT = 5000

//express config
expressConfig(app)

//config handlebars
handlebarsConfig(app)

//Routes (Modular Routes)
app.use(homeController)
app.use('/cubes', cubeController) // will work only for paths, having '/cubes'
app.get('*', (req, res) => {
    res.redirect('/404')
})

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}...`) })