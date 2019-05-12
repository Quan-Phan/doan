//Get all item
var connect_database =require('../dbs/index');

exports.list_product=function (req,res) {
    connect_database.query("SELECT * FROM products",function (error,list_product) {
        if(error){
            console.log("Do not query");
        }
        else {
            console.log("Successful");

           // res.send(list_product);
            res.render('list_products',{ title: 'Danh sách sản phẩm',list_product});
        }
    });

};