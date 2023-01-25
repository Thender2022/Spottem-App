var express = require('express');
var router = express.Router();
var skatespotsCtrl = require('../controllers/skatespots');
const ensureLoggedIn = require('../config/ensureLoggedIn');

/* GET users listing. */
router.get('/', skatespotsCtrl.index)
router.get('/new', ensureLoggedIn, skatespotsCtrl.new)
router.get('/:id', skatespotsCtrl.show)
router.post('/', ensureLoggedIn, skatespotCtrl.create)



module.exports = router;
