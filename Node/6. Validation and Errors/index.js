const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))

const { isAgeValid, isNameValid } = require('./utils/commonValidations')
const { validateName } = require('./middlewears/middlewears')

const validator = require('validator')

app.get('/', (req, res) => {

    res.send(`<form method="POST">
    <label for="name">Name</label>
    <input type="text" id="name" name="name">

    <label for="age">Age</label>
    <input type="number" name="age" id="age">

    <label for="password">Password</label>
    <input type="text" name="password" id="password">

    <input type="submit" value="submit">

</form>`)
})
//4 custom validations (write in the action, Export as util, middlewear, ext. libraries like validator)
app.post('/', validateName, (req, res) => {
    const { age, name, password } = req.body
    //sample validation in the endpoint
    if (!isAgeValid(age)) {
        return res.send('Invalid age')
    }
    // npm validator
    if (!validator.isStrongPassword(password)) {
        return res.send('Weak Password!')
    }
    res.send('Succsseeded')
})


app.listen(5000, () => { console.log('app listen on port 5000...') })