const http = require('http')
const fs = require('fs')
const handlebars = require('handlebars')

const cats = require('./resources/content/catsStore/catsStore')

const server = http.createServer((req, res) => {
    
    if (req.url === '/' && req.method == 'GET') {
        fs.readFile('./resources/views/home/index.hbc', 'UTF-8', (err, data) => {
            if (err) {
                console.log(err)
                res.writeHead(500, { 'Content-Type': 'text/html' })
                res.write('<h1>500 internal server Error !</h1>')
                res.end()
                return
            } else {
                const template = handlebars.compile(data.toString())
                const html = template({ cats: cats })
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(html)
                res.end()
            }
        })
    }
    if (req.url === '/content/styles/site.css' && req.method == 'GET') {
        fs.readFile('./resources/content/styles/site.css', 'UTF-8', (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            res.setHeader('Content-Type', 'text/css')
            res.write(data)
            res.end()
        })
    }
    if (req.url === '/content/images/pawprint.ico' && req.method === 'GET') {
        fs.readFile('./resources/content/images/pawprint.ico', (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            res.setHeader('content-Type', 'image/x-icon')
            res.write(data)
            res.end()
        })
    }
    if (req.url === '/cats/add-cat' && req.method === 'GET') {
        fs.readFile('./resources/views/addCat.html', 'UTF-8', (err, data) => {
            if (err) {
                console.log(err)
                return
            }
            res.writeHead(200, { 'content-Type': 'text/html' })
            res.write(data)
            res.end()
        })

    }
})
server.listen(5000, () => { console.log('The server listening on PORT 5000...') })