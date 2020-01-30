let express = require('express');
let eventService = require('../../services/events');
var authService = require('../../services/auth')

let router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  let event = req.body
  let user = authService.getAuthData(req)
  if(user){
    eventService.createEvent(event, user)
    res.status(201).send("created")
  } else {
    res.status(401).send("error")
  }
});

router.put('/:id', function(req, res, next) {
  eventService.update(req.params.id, req.body)
  res.status(201).send("created")
});

router.delete('/:id', function(req, res, next) {
  eventService.delete(req.params.id)
  res.status(200).send("deleted")
});

module.exports = router;
