
//var cuahang = require('../models/CuaHang');
var store=require('../models/CuaHangModel');

exports.listStore =function (req,res) {
	const data={};
	var subPoster = store.listStore();
	
	subPoster.then(rowsl=>{
		data.listStore=rowsl;
		console.log(data);
		res.render('CuaHang/index',{title: 'Danh sách cửa hàng',data});
	});

   
};