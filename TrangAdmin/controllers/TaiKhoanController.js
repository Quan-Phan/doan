var connect_database =require('../dbs/connect_database');
var bcrypt=require('bcrypt');
/*exports.taikhoan=function (req,res) {
    res.render('index');
}*/
module.exports = {
	taikhoan:(req,res)=>{
		 res.render('index');
	},
	themTaiKhoan:(req,res)=>{
		
		var user = req.body.nameUsername;
		var pass = req.body.namePass;
		var name = req.body.nameName;
		var email = req.body.nameEmail;
		var linkavt = req.body.nameLink;
		var typeAcc = req.body.typeOfAcc;

		bcrypt.genSalt(10,function (error,salt) {
			bcrypt.hash(pass,salt,function (err,hash) {
				//
				// db_connection.query("INSERT INTO `member`( `mat_khau`) VALUES ('"+hash+"')",function (error,result) {
				// 	if(error){
				// 		console.log("lỗi");
				// 	}
				// 	console.log("OK");
				// });

				if(typeAcc=="QL"){
					sql ="INSERT INTO member(ten_dang_nhap,mat_khau,ten,email,link_anh,loai_tai_khoan) VALUES ('"+user+"','"+hash+"', N'"+name+"', '"+email+"', '"+linkavt+"', "+0+")";
				}
				else if(typeAcc=="KH"){
					sql ="INSERT INTO member(ten_dang_nhap,mat_khau,ten,email,link_anh,loai_tai_khoan) VALUES ('"+user+"','"+hash+"', N'"+name+"', '"+email+"', '"+linkavt+"', "+1+")";
				}
				connect_database.query(sql,function(error,result){
					if(error){
						console.log("Do not query");
					}
					else{
						console.log("New Account Added!!!");
					}
					res.redirect('/TaiKhoan');
				});
			})
		});


	}
}