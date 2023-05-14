const http = require('http')
const fs = require('fs')
// const { render } = require('lithtml')


const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/' && req.method == 'GET') {
        fs.readFile('./resources/views/home/index.html', (err, data) => {
            if (err) {
                console.log(err)
                res.writeHead(500, { 'Content-Type': 'text/html' })
                res.write('<h1>500 internal server Error !</h1>')
                res.end()
                return
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.write(data)
                res.end()
            }

        })
    }
    if (req.url === '/content/styles/site.css' && req.method == 'GET') {
        fs.readFile('./resources/content/styles/site.css', (err, data) => {
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
})
server.listen(5000, () => { console.log('The server listening on PORT 5000...') })