const express = require('express')
const app = express()

const { v4: uuid } = require('uuid')
const cookieParser = require('cookie-parser')

const bcrypt = require('bcrypt')
const jwt = require('./lib/jwt')

//use middleware
app.use(cookieParser())
app.use(express.urlencoded({ extended: false }))

const secret = 'mySecret'
const users = {}

app.get('/', (req, res) => {
    res.send('Hello')
})

app.get('/register', (req, res) => {
    res.send(`
<form method="POST">
    <label for="username">Username:</label>
    <input type="text" id="userName" name="userName">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
<input type="submit" value="Register">
</form>
`)
})
app.post('/register', async (req, res) => {
    const { userName, password } = req.body

    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(password, salt)

    users[userName] = {
        password: hash
    }
    res.redirect('/login')

})

///////////////////

app.get('/login', (req, res) => {
    res.send(`
<form method="POST">
    <label for="username">Username:</label>
    <input type="text" id="userName" name="userName">
    <label for="password">Password:</label>
    <input type="password" id="password" name="password">
<input type="submit" value="Login">
</form>
`)
})
app.post('/login', async (req, res) => {
    const { userName, password } = req.body

    const hash = users[userName]?.password
    const isValid = await bcrypt.compare(password, hash)

    if (isValid) {
        //generate jwt.jwt is callbach based for that converted it with util in jwt module
        try {
            const payload = { userName }
            const token = await jwt.sign(payload, secret, { expiresIn: '2d' })
            //set jwt as cookie
            res.cookie('token', token)
            res.redirect('/profile')
        } catch (err) {
            console.log(err);
            res.redirect('/404')
        }
    } else {
        res.status(401).send('The password is not correct Unauthorized ')
    }

})
app.get('/profile', async (req, res) => {
    //get token from cookie
    const token = req.cookies['token']
    //verify token
    if (token) {
        try {
            const payload = await jwt.verify(token, secret)
            res.send('Profile: ' + payload.userName)
        } catch (err) {
            res.status(401).send('unauthorised')
        }

    } else {
        return res.redirect('/login')
    }

})

app.listen(5000, () => { console.log('Server listening on Port 5000...') })