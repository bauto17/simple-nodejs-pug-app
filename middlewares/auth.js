var authService = require('../services/auth')


module.exports = {
    pages: function (req, res, next) {
        console.log("middleware called")
        if (authService.isAuth(req)) {
            next()
        } else {
            res.redirect('/auth/login');
        }
    },
    api: function (req, res, next) {
        console.log("api middleware called")
        if (authService.isAuth(req)) {
            next()
        } else {
            res.status(401).send("unauthorized")
        }
    },
}