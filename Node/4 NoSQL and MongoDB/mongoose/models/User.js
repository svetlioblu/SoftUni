const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    isDeleted: Boolean,
    firstName: String,
    lastName: String,
    email: String,
    imageUrl: String,
    phoneNumber: String,
    address: String
})

const User = mongoose.model('User', userSchema)

module.exports = User