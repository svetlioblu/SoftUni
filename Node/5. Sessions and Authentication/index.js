const express = require('express')
const app = express()
const { v4: uuid } = require('uuid')
const cookieParser = require('cookie-parser')

app.use(cookieParser())

app.get('/', (req, res) => {
    let id = uuid()

    const userId = req.cookies['userId']
    if (userId) {
        id = userId
    } else {
        res.cookie('userId', id)
    }

    res.send('holla  ' + id)
})
app.listen(5000, () => { console.log('Server listening on Port 5000...') })