var product=require('../model/product');
var producer=require('../model/producers');

exports.index=function (req,res) {
   const data={};
   const user=req.user;
   const signOut="Log out";
   var subPoster = product.list();
   subPoster.then(rows1 =>{
      data.list_product=rows1;
      var pro=producer.list();
      pro.then(row=>{
         data.list_producer=row;
         res.render('index',{data,signOut,user});
      })
   });

};