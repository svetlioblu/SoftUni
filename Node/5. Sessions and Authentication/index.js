const express = require('express')
const app = express()
const { v4: uuid } = require('uuid')
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/', (req, res) => {
    let id = uuid()
    const session = {}

    const userId = req.cookies['userId']

    if (userId) {
        id = userId
    } else {
        //session is info stored into the server memmory, not retun to the client there npm
        session[id] = {
            secret: 'mySecret'
        }
        // creates cookie if no such
        res.cookie('userId', id, { httpOnly: true })
    }
    res.send('holla  ' + id)
})
app.listen(5000, () => { console.log('Server listening on Port 5000...') })