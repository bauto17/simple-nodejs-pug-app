const initOptions = {/* options as documented below */};

var pgp = require('pg-promise')(initOptions)
var db = pgp('postgres://homestead:secret@localhost:5432/proyecto0')

module.exports = {
    pgClient: db
}