const http = require('http')

http.createServer((req, res) => {

    res.writeHead(201,{
        'Content-Type':'text/html'
    })
    res.write('<h1>Hello from test server Node!</h1>')
    res.end()
})
    .listen(5000)
console.log('node server runs on 5000')