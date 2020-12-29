let express = require('express')
let handlebars = require('express-handlebars')
let fs = require('fs')
let app = express()
let port = 3000
// config for handlebars
app.engine('hbs', handlebars())
app.set('view engine', '.hbs')
//-------
app.get('/', function (rec, res) {
    res.render('home', { layout: false })
    //res.send('Hello World !')
})
//------
app.get('/catalog', (req, res) => {
    let products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'))

    res.render('catalog', { layout: false, products })
    //res.send('Hello from Catalog!')
})
//-------
app.get('/catalog/:serial_number', (req, res) => {
    let products = JSON.parse(fs.readFileSync('./data/products.json', 'utf-8'))
    let sn = req.params.serial_number
    if (products.includes(sn)) {
        res.render(`details`, { layout: false, sn })

    } else {
        res.status(404)
        res.render('404', { layout: false, sn })
        //res.send(`<p> error code 404 ! product with S/N ${sn} not found</p>`)
    }
})
app.listen(port, () => {
    console.log(`server listening on port ${port}`)
})