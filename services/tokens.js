
var tokens = {}
module.exports = {
    generate: function(data) {
        let token = "token"+data.username+"1234"
        tokens[token] = data
        return token
    },
    validate: function(token) {
        return tokens[token]
    },
};