
// JavaScript Document
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('dangnhapAdmin', { title: 'DangNhapAdmin'});
});

module.exports = router;
// JavaScript Document