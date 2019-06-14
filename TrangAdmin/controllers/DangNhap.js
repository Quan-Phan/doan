var connect_database =require('../dbs/connect_database');
var bcrypt=require('bcrypt');

module.exports ={

    loginGet:(req,res)=>{
        res.render('DangNhap');
    },
    loginPost:(req,res)=>{
        var username=req.body.nameUser;
		var pass = req.body.namePass;

		console.log(username);
		var flag=0;
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
                    	flag=1;
                    	console.log(data.list_member[i].ten_dang_nhap);
                        bcrypt.compare(pass,data.list_member[i].mat_khau,function (err,rs) {
                            if(rs==true)
                            {
                                res.redirect('/TaiKhoan');
                            }
                            else{
                                res.render('DangNhap');
                            }
                        })
                    }
		        }
                 if(flag==0){
                 	res.render('DangNhap');
				 }
		    }
		})
    }   
};