var express = require('express');
var sign = require('../controllers/sign');
var router = express.Router();

var mongoose = require('mongoose');
var db = mongoose.connection;

/* GET users listing. */
router.get('/', function(req, res, next) {
  var personModel = db.model('Person');
  var personEntity = new personModel({ name: 'z3' });
  var personMethods = personEntity.speak();
  var person;
  personEntity.save();
  personModel.find(function(err,persons){
      person = persons
    });
  res.render('index', { title: person });
});

// sign
router.post('/signUp', sign.signUp);
module.exports = router;
