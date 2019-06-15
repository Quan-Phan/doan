var bill=require('../models/DonHangModel');

exports.donhang =function (req,res) {
   const data={};
	var subPoster = bill.listbill();
	subPoster.then(rowsl=>{
		data.listbill=rowsl;
		res.render('DonHang/DonHang',{title: 'Danh sách đơn hàng',data});
	});

};