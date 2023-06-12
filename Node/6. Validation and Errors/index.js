const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: false }))

const { isAgeValid, isNameValid } = require('./utils/commonValidations')
const { validateName } = require('./middlewears/middlewears')

app.get('/', (req, res) => {

    res.send(`<form method="POST">
    <label for="name">Name</label>
    <input type="text" id="name" name="name">

    <label for="age">Age</label>
    <input type="number" name="age" id="age">

    <input type="submit" value="submit">

</form>`)
})
//using middlewear
app.post('/', validateName, (req, res) => {
    const { age, name } = req.body
    //sample validation in the endpoint
    if (!isAgeValid(age)) {
        return res.send('Invalid age')
    }
    res.send('Succsseeded')
})


app.listen(5000, () => { console.log('app listen on port 5000...') })