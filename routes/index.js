var express = require('express');
var router = express.Router();
var CuaHangController = require('../controllers/CuaHangController');
var DonHangController = require('../controllers/DonHangController');
var SanPhamController = require('../controllers/SanPhamController');
var ThongKeController = require('../controllers/ThongKeController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/CuaHang',CuaHangController.cuahang);
router.get('/DonHang',DonHangController.donhang);
router.get('/SanPham',SanPhamController.sanpham);
router.get('/ThongKe',ThongKeController.thongke);

module.exports = router;
