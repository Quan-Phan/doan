// JavaScript Document
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('QlyDonHang', { title: 'QlyDonHang' });
});

module.exports = router;
