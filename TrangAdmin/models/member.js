var connect_database =require('../dbs/connect_database');
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
    }
};