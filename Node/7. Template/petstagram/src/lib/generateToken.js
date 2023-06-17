const jsonWebToken = require('./jwt')
const { secret } = require('./secret')

exports.generateToken = async (user) => {
    const payload = {
        _id: user._id,
        username: user.username,
        email: user.email
    }
    const token = await jsonWebToken.sign(payload, secret, { expiresIn: '2d' })
    return token
}