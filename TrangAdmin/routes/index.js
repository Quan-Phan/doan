var express = require('express');
var router = express.Router();
var CuaHangController = require('../controllers/CuaHangController');
var DonHangController = require('../controllers/DonHangController');
var SanPhamController = require('../controllers/SanPhamController');
var ThongKeController = require('../controllers/ThongKeController');
var NhaSX_LoaiSP=require('../controllers/NhaSX_LoaiSP');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/CuaHang',CuaHangController.cuahang);
router.get('/DonHang',DonHangController.donhang);
router.get('/SanPham',SanPhamController.sanpham);
router.get('/themSanPham',SanPhamController.themSanPhamPage);
router.post('/themSanPham',SanPhamController.themSanPham);
router.get('/Delete/:id',SanPhamController.xoaSanPham);
router.get('/SuaSP/:id',SanPhamController.suaSanPhamPage);
router.post('/SuaSP/:id',SanPhamController.suaSanPham);
router.get('/NhaSX_LoaiSP',NhaSX_LoaiSP.index);
router.get('/themNhaSX',NhaSX_LoaiSP.themNhaSXPage);
router.post('/themNhaSX',NhaSX_LoaiSP.themNhaSX);
router.get('/DeleteNhaSX/:id',NhaSX_LoaiSP.xoaNhaSX);
router.get('/SuaNhaSX/:id',NhaSX_LoaiSP.suaNhaSXPage);
router.post('/SuaNhaSX/:id',NhaSX_LoaiSP.suaNhaSX);

router.get('/themLoaiSP',NhaSX_LoaiSP.themLoaiSPPage);
router.post('/themLoaiSP',NhaSX_LoaiSP.themLoaiSP);
router.get('/DeleteLoai/:id',NhaSX_LoaiSP.xoaLoai);
router.get('/SuaLoaiSP/:id',NhaSX_LoaiSP.suaLoaiSPPage);
router.post('/SuaLoaiSP/:id',NhaSX_LoaiSP.suaLoaiSP);

router.get('/ThongKe',ThongKeController.thongke);

module.exports = router;
