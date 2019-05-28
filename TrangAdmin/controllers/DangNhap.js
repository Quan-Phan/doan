var connect_database =require('../dbs/connect_database');

module.exports ={

    loginGet:(req,res)=>{
        res.render('DangNhap');
    },
    loginPost:(req,res)=>{
        var username=req.body.nameUser;
		var pass = req.body.namePass;
        var query ="SELECT COUNT(*) AS Soluong FROM member WHERE ten_dang_nhap='"+username+"' and mat_khau='"+pass+"'";
        connect_database.query(query,function (error,result) {
            if(error){
                console.log("Do not query!!!");
            }
			else{
				if(result[0].Soluong.toString()=="1"){
					res.redirect('/TaiKhoan');
				}
				else if(result[0].Soluong.toString()=="0"){
					res.render('DangNhap');
					res.send("0");
				}			
			}          
        })		
    }   
};