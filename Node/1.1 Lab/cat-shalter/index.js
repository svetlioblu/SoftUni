const http = require('http')
const fs = require('fs')
const handlebars = require('handlebars')


const server = http.createServer((req, res) => {
    console.log(req.url)
    if (req.url === '/' && req.method == 'GET') {
        fs.readFile('./resources/views/home/index.hbc', (err, data) => {
            if (err) {
                console.log(err)
                res.writeHead(500, { 'Content-Type': 'text/html' })
                res.write('<h1>500 internal server Error !</h1>')
                res.end()
                return
            } else {
                const template = handlebars.compile(data.toString());
                const cats = [{
                    breed: 'Bombay Cat',
                    description: 'Dominant and aggressive to other cats. Will probably eat you in your',
                    img: 'https://cdn.pixabay.com/photo/2018/08/08/05/12/cat-3591348_1280.jpg'
                }
                    , {
                    breed: 'Shorthair Cat',
                    description: 'British and aggressive to other cats. Will probably eat you in your',
                    img: 'https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492_1280.jpg'
                },
                {
                    breed: 'Pretty Kitty',
                    description: 'Dominant and aggressive to other cats. Will probably eat you in your',
                    img: 'https://cdn.pixabay.com/photo/2014/04/13/20/49/cat-323262_1280.jpg'
                }]

                const html = template({ cats: cats });
                res.writeHead(200, { 'Content-Type': 'text/html' })
                res.end(html)
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