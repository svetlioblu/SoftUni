const express = require('express')
const handlebars = require('express-handlebars')
const mongoose = require('mongoose')

// available across the app
const cookieParser = require('cookie-parser')
const { auth } = require('./middlewears/authMiddlewear')

const routes = require('./routes')

//config express
const app = express()

//config mongoose(change db name)
mongoose.connect('mongodb://127.0.0.1:27017/petstagram')
    .then(() => { console.log('DB connected successfuly!') })
    .catch(err => console.log('DB error: ', err.message))

// config handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', 'src/views')

//config middlewears
app.use(express.static('src/assets'))
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser()) //! auth after cookie-parser
app.use(auth)
app.use(routes)


app.listen(5000, () => { console.log('The server listening on port 5000...') })