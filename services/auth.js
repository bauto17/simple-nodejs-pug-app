
var userRepository = require('../repositories/users');
var tokenService = require('./tokens')

module.exports = {
    isAuth: function(req) {
        let { cookies } = req
        if (cookies.username && cookies.token) {
            user = tokenService.validate(cookies.token)
            return user && cookies.username == user.username
        } else {
            false
        }
    },
    getAuthData: function(req) {
        let { cookies } = req
        if (cookies.username && cookies.token) {
            return tokenService.validate(cookies.token)
        } else {
            return undefined
        }
    },
    login: function(username, password) {
        return userRepository.getUser(username, password).then(it => {
            if(it){
                return {
                    username: username,
                    auth: true,
                    token: tokenService.generate(it)
                }
            }else{
                return {
                    username: "",
                    auth: false,
                    token: ""
                }
            }
        })
    },
    createUser: function(username, password) {
        userRepository.create({
            username: username,
            password: password
        })
    },
    listUsers: function(){
        return userRepository.list()
    }
};