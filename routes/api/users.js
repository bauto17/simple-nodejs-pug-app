let express = require('express');
let userService = require('../../services/auth');
let router = express.Router();

/* GET users listing. */
router.post('/', function(req, res, next) {
  let user = req.body
  if(user.password && user.username){
    userService.createUser(user.username, user.password)
    res.status(201).send("created")
  } else {
    res.status(400).send()
  }
});

router.get('/', function(req, res, next) {
  userService.listUsers().then(users => {
    res.send(users)
  })
});

module.exports = router;
