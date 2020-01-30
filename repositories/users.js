var { pgClient } = require('../config/database')

module.exports = {
    create: function(user) {
        pgClient.none('INSERT INTO users(username, password) VALUES(${user.username}, ${user.password})', {
            user: user
        }).catch(error => {
            console.log("error: " + error)    
        });
    },
    list: function() {
        return pgClient.any(
            'SELECT * FROM users', {}
        ).then(data => {
            return {users: data}
        });
    },
    getUser: function(username, password) {
        return pgClient.any(
            'SELECT * FROM users WHERE username = $1', [username]
        ).then(data => {
            return data.find(it => it.username == username && it.password == password)
        });
    }
}