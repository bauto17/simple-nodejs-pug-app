var express = require('express');
var eventService = require('../services/events'); 
var authService = require('../services/auth')
var router = express.Router();


router.get('/', function(req, res, next) {
  let user = authService.getAuthData(req)
  if(user){
    eventService.list(user).then(it => {
      console.log(it) 
      res.render('events', { 
        events: it.events,
        name: 'nombre'
      });
    })
  } else {
    res.redirect('/pages/events');
  }
});


router.get('/post', function(req, res, next) { 
  res.render('event_detail', { 
    event: {},
    name: 'nombre',
    edit: false
  });
});

router.get('/:id', function(req, res, next) { 
  eventService.getById(req.params.id).then(it => {
    if(it){ 
      res.render('event_detail', { 
        event: it,
        name: 'nombre',
        edit: true
      });
    } else{
      res.redirect('/pages/events');
    }
  })
});


module.exports = router;
