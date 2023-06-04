const express = require('express')
const app = express()

const { v4: uuid } = require('uuid')
// Cookie parser implementation
app.get('/', (req, res) => {
    let id = uuid()
    const cookie = req.header('Cookie')
    if (cookie) {
        const [key, value] = cookie.split('=')
        id = value
    } else {
        res.header('Set-Cookie', `userId=${id}`)
    }

    res.send(`Hello User - ${id}`)
})


app.listen(5000, () => { console.log('Server listening on Port 5000...') })

