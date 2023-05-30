const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    isDeleted: Boolean,
    firstName: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 12
    },
    lastName: String,
    email: String,
    imageUrl: String,
    phoneNumber: String,
    address: String
})
// there are methods that can apply on the schema example
userSchema.methods.greet = function () {
    console.log(`Hi I am ${this.lastName}`)
}
// can create a virtual property that not exists into the db
userSchema.virtual('info').get(function () {
    return `My name is ${this.firstName}  ${this.lastName}`
})

const User = mongoose.model('User', userSchema)

module.exports = User