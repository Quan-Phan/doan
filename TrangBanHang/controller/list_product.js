//Get all item
var product =require('../model/product');

module.exports={
    list_product:(req,res) => {
        const data = {};
        const user=req.user;
        const signOut="Log out";
        let page = req.params.page;
        let idNhaSX=req.params.idNhaSX;
        // page=parseInt(page);
        if (!page) {
            page = 1;
        }
      //  const pageStart =page;
      //  console.log(page);
        const limit = 6;
        const offset = (page - 1) * limit ;
        if(idNhaSX==0){
            let tem=product.findByOffset(limit,offset);
                tem.then(row2=>{
                    data.list_product=row2;
                    console.log(data.list_product.length);
                    res.render('list_products',{title: 'Danh sách sản phẩm', data,user,signOut,idNhaSX})
                })
        }
        let subPoster = product.findByOffsetIdNhaSX(idNhaSX,limit, offset);
        subPoster.then(rows1 => {
            data.list_product = rows1;
            //console.log(data.list_product);
            res.render('list_products', {title: 'Danh sách sản phẩm', data,user,signOut,idNhaSX});
        });
    }
};


