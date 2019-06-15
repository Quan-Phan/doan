var connect_database =require('../dbs/index');
var bcrypt=require('bcrypt');

module.exports= {
    list:()=>{
        let query="SELECT * FROM member";
        return connect_database.load(query);
    },
   get:(ten_dang_nhap)=>{
       let query="SELECT * FROM member WHERE ten_dang_nhap= '" +ten_dang_nhap+"'";
       return connect_database.load(query);
   },
    getID:(id)=>{
        let query="SELECT * FROM member WHERE id= '" +id+"'";
        return connect_database.load(query);
    },
    insert:(ten,email,link_anh,ten_dang_nhap,mat_khau)=>{
        var sql="INSERT INTO member (ten,email,link_anh,ten_dang_nhap,mat_khau) VALUES ('"+ten+"','"+email+"','"+link_anh+"','"+ten_dang_nhap+"','"+mat_khau+"')";
        return connect_database.load(sql);
    },
    update:(ten,email,link_anh,id)=>{
       var sql="UPDATE member set ten='"+ten+"',email='"+email+"',link_anh='"+link_anh+"' WHERE id='"+id+"'" ;
       return connect_database.load(sql);
    },
    updateMK:(id,mat_khau)=>{
        var sql="UPDATE member set mat_khau='"+mat_khau+"' WHERE id='"+id+"'" ;
        return connect_database.load(sql);
    }

};