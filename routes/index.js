var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Spottem' });
});

router.get('/', function(req, res, next) {
  res.redirect('/skatespots');
})

module.exports = router;
