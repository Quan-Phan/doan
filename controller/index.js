var connect_database=require('../dbs/index');

exports.index=function (req,res) {
   connect_database.query("SELECT * FROM products",function (error,list_product) {
      if(error){
         console.log("Do not query");
      }
      else {
         console.log("Successful");

         // res.send(list_product);
         res.render('index',{ title: 'Danh sách sản phẩm',list_product});
      }
   });

};