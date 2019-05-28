var connect_database =require('../dbs/connect_database');
var bcrypt=require('bcrypt');

module.exports ={

    loginGet:(req,res)=>{
        res.render('DangNhap');
    },
    loginPost:(req,res)=>{
        var username=req.body.nameUser;
		var pass = req.body.namePass;

		const data={};
		var query ="SELECT * FROM member";
		connect_database.query(query,function (error,result) {
		    if(error){
		        console.log("Do not query!!!");
		    }
		    else{
		        data.list_member=result;
		        for(let i=0;i<data.list_member.length;i++)
		        {
		            if(data.list_member[i].ten_dang_nhap == username)
                    {
                        bcrypt.compare(pass,data.list_member[i].mat_khau).then(function (result) {
                            if(result==true)
                            {
                                res.redirect('/TaiKhoan');
                            }
                            else{
                                res.render('DangNhap');
                            }
                        })
                    }
		            else {
		                res.render('DangNhap');
                    }
		        }
                        // if(result[0].Soluong.toString()=="1"){
                        //     res.redirect('/TaiKhoan');
                        // }
                        // else if(result[0].Soluong.toString()=="0"){
                        //     res.render('DangNhap');
                        //     res.send("0");
                        // }
		    }
		})
    }   
};