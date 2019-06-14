var connect=require('../dbs/connect_database');
var bcrypt=require('bcrypt');

const pass='Hau';

// bcrypt.genSalt(10,function (err,salt) {
//     bcrypt.hash(pass,salt,function (err,hash) {
//         sql="INSERT INTO member (ten_dang_nhap,mat_khau) VALUES ('"+pass+"','"+hash+"')";
//         connect.query(sql,function (err,reult) {
//             if(err){
//                 console.log("them ko thanh cong")
//             }
//             else{
//                 console.log("Da them duoc")
//             }
//         })
//     });


//});
const username='Hau';
var flag=0;
const data={};
sql ="SELECT * FROM member";
connect.query(sql,function (error,result) {
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
                        console.log("True");
                    }
                    else{
                        console.log("False");
                    }
                })
            }
        }
        if(flag==0){
            console.log("khong ton tai usename")
        }

    }
});

/*
connect.query("SELECT * FROM member WHERE id='"+9+"'",function (err,result) {
    if(!err){
        console.log(result[0].ten_dang_nhap);
        bcrypt.compare(pass,result[0].mat_khau,function (err,rs) {
            if(rs==true){
                console.log(rs)
            }
        })
    }
})*/
