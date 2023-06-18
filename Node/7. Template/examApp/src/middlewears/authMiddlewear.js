const jsonWebToken = require('../lib/jwt')
const { secret } = require('../lib/secret')

exports.auth = async (req, res, next) => {
    const token = req.cookies['auth']

    if (token) {
        try {
            const decodedToken = await jsonWebToken.verify(token, secret)
            req.user = decodedToken
            res.locals.user = decodedToken
            res.locals.isAuthenticated = true
            next()
        } catch (err) {
            res.clearCookie('auth')
            res.redirect('/users/login')
        }

    } else {
        next()
    }
}

exports.isAuth = (req, res, next) => {
    if (!req.user) {
        return res.redirect('/users/login')
    }
    next()
}