// JavaScript Document
// JavaScript Document
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('QlyHangHoa', { title: 'QlyHangHoa' });
});

module.exports = router;
