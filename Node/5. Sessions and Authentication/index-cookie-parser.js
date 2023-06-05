const express = require('express')
const app = express()
const { v4: uuid } = require('uuid')
const cookieParser = require('cookie-parser')


//use middleware
app.use(cookieParser())


app.get('/', (req, res) => {
    let id = uuid()
    //get cookie
    const userId = req.cookies['userId']

    if (userId) {
        id = userId
    } else {
        // set cookie if no exists
        res.cookie('userId', id, { httpOnly: true })
    }
    res.send('holla  ' + id)
})

app.listen(5000, () => { console.log('Server listening on Port 5000...') })