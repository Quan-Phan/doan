
//var cuahang = require('../model/CuaHang');
var connect_database=require('../dbs/connect_database');

exports.cuahang =function (req,res) {

    // const data={};
    // data.shop=cuahang.list();
    // console.log(data.shop);
    connect_database.query("SELECT * FROM shops",function (error,list_shop) {
        if(error){
            console.log("Do not query");
        }
        else {
            console.log("Successful");
             res.render('CuaHang/index',{ title: 'Danh sách sản phẩm',list_shop});
        }
    });
};