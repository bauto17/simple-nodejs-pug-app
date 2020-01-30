var { pgClient } = require('../config/database')
var generalUtils = require('../utils/general')

module.exports = {
    create: function(event, user) {
        pgClient.none("INSERT INTO events(name, category, place, address, starts_at, ends_at, type, user_id) \
         VALUES(${event.name}, ${event.category}, ${event.place}, ${event.address}, ${event.starts_at}, ${event.ends_at}, ${event.type}, ${user.id})", {
            event: event,
            user: user
        }).catch(error => {
            console.log("error: " + error)    
        });
    },
    list: function(user) {
        return pgClient.any(
            'SELECT * FROM events WHERE user_id = $1 ORDER BY starts_at DESC', [user.id]
        ).then(data => {
            data.forEach(it => {
                it.ends_at = generalUtils.formatDate(it.ends_at)
                it.starts_at = generalUtils.formatDate(it.starts_at)
            })
            return {events: data}
        });
    },
    getById: function(id) {
        return pgClient.any(
            'SELECT * FROM events WHERE id = $1', [id]
        ).then(data => {
            data.forEach(it => {
                it.ends_at = generalUtils.formatDate(it.ends_at)
                it.starts_at = generalUtils.formatDate(it.starts_at)
            })
            return data.find(it => it.id == id)
        });
    },
    update: function(id, event) {
        pgClient.none('UPDATE events \
        SET name = ${event.name}, \
            category = ${event.category}, \
            place = ${event.place}, \
            address = ${event.address}, \
            starts_at = ${event.starts_at}, \
            ends_at = ${event.ends_at}, \
            type = ${event.type} \
         WHERE id = ${id}', {
            event: event,
            id: id 
        }).catch(error => {
            console.log("error: " + error)    
        });
    },
    delete: function(id) {
        console.log("delete "+id)
        pgClient.none('DELETE FROM events WHERE id = ${id}', {
            id: id 
        }).catch(error => {
            console.log("error: " + error)    
        });
    }
}
