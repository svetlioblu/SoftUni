const express = require('express')
const handlebars = require('express-handlebars')

const app = express()
const PORT = 5000

//config handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs'
}))
app.set('view engine', 'hbs')
app.set('views', 'src/views') //hbs serach in root/views by default.

//Routes 
app.get('/', (req, res) => {
    res.send('<h1>Hello express</h1>')

})

app.listen(PORT, () => { console.log(`Server listening on port ${PORT}...`) })