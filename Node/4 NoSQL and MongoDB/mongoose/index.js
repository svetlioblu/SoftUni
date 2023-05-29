const mongoose = require('mongoose')

const User = require('./models/USER')

async function connnectDb() {
    await mongoose.connect('mongodb://127.0.0.1:27017/user-list')

    console.log('DB connected successfuly !')

    const users = await User.find()
    console.log(users)
}

connnectDb()