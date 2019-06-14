var product=require('../model/product');

exports.index=function (req,res) {
   const data={};
   var subPoster = product.list();
   subPoster.then(rows1 =>{
      data.list_product=rows1;
      res.render('index',{data});
   });

};