
var eventsRepository = require('../repositories/events');

module.exports = {
    createEvent: function(event, user) {
        eventsRepository.create(event, user)
    },
    list: function(user){
        return eventsRepository.list(user)
    },
    getById(id){
        return eventsRepository.getById(id)
    },
    update(id, event){
        return eventsRepository.update(id, event)
    },
    delete(id){
        return eventsRepository.delete(id)
    }
};