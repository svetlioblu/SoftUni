const mongoose = require('mongoose')

async function connnectDb () {
await mongoose.connect('mongodb://127.0.0.1:27017/user-list')


console.log('DB connected successfuly !')
}

connnectDb()