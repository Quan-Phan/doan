//var passport =require('passport');
/* GET home page. */

var express = require('express');
const passport = require('passport');
var router=express.Router();
var index_caronline=require('../controller/index');
var detail_product_controller=require('../controller/detail_product');
var list_product_controller = require('../controller/list_product');
var login =require ('../controller/login');
var sign_up = require('../controller/sign_up');
var my_profile=require('../controller/my_profile');
var take_pass_again=require('../controller/take_pass_again');
var checkUsername = require('../controller/checkUsername');

router.get('/', index_caronline.index);
router.get('/list_products/:page',list_product_controller.list_product);
router.get('/detail_product/:id/:pageBL',detail_product_controller.detail_product);
router.post('/detail_product/:id/:pageBL',detail_product_controller.detail_productPost);

router.get('/login',login.loginGet);
router.post('/login', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/sign_up'
}));
//router.post('/login',login.loginPost);

router.get('/sign_up',sign_up.sign_upPage);
router.post('/sign_up',sign_up.sign_up);
router.get('/my_profile',my_profile.my_profile);
router.get('/take_pass_again',take_pass_again.take_pass);
module.exports = router;


