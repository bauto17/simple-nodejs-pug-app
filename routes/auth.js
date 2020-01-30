let authService = require('../services/auth')
var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
  let user = req.body
  if(user.password && user.username){
    authService.login(user.username, user.password).then(result => {
      res.send(result)
    })
  } else {
    res.status(400).send()
  }
});

router.get('/singup', function(req, res, next) {
  res.render('singup', { title: 'Express' });
});

router.post('/singup', function(req, res, next) {
  let user = req.body
  if(user.password && user.username){
    authService.createUser(user.username, user.password)
    res.status(201).send("created")
  } else {
    res.status(400).send()
  }
});

module.exports = router;
