var express = require('express');
var router = express.Router();
var skatespotsCtrl = require('../controllers/skatespots')

/* GET users listing. */
router.get('/', skatespotsCtrl.index)
router.get('/:id', skatespotsCtrl.show)


module.exports = router;
