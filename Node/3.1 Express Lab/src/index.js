const express = require('express')
const handlebars = require('express-handlebars')

const expressConfig = require('./config/expressConfig')
const app = express()
const PORT = 5000

//express config
expressConfig(app)

//config handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}))
app.set('view engine', 'hbs')
app.set('views', 'src/views') //hbs serach in root/views by default.

//Routes 
app.get('/', (req, res) => {
    res.render('home')

})
app.listen(PORT, () => { console.log(`Server listening on port ${PORT}...`) })