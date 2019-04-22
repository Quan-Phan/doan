var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var new1 =require('./routes/new'); 
var about =require('./routes/about');
var specialRouter = require('./routes/specials');
var contact = require('./routes/contact');
var giohang =require('./routes/giohang');
var xacnhan =require('./routes/xacnhamua');
var dangnhapAdmin=require('./routes/dangnhapAdmin');
var TrangChuAdmin=require('./routes/TrangChuAdmin');
var QlyCuaHang=require('./routes/QlyCuaHang');
var QlyHangHoa=require('./routes/QlyHangHoa');
var QlyDonHang=require('./routes/QlyDonHang');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/new', new1);
app.use('/about', about);
app.use('/specials', specialRouter);
app.use('/contact', contact);
app.use('/users', usersRouter);
app.use('/giohang', giohang);
app.use('/xacnhanmua', xacnhan);
app.use('/dangnhapAdmin', dangnhapAdmin);
app.use('/Admin', TrangChuAdmin);
app.use('/Admin/quanlycuahang', QlyCuaHang);
app.use('/Admin/quanlyhanghoa', QlyHangHoa);
app.use('/Admin/quanlydonhang', QlyDonHang);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
