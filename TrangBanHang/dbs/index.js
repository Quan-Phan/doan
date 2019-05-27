
//kết nối sơ sở dữ liệu
var mysql =require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "quanly_car_online",
});
con.connect(function(err) {
    if (err){
        console.log(err);
    }
    else {
        console.log("Connected!!!");
    }
});


module.exports = con;