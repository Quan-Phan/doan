//Get all item
var product =require('../model/product');

module.exports={
    list_product:(req,res) => {
        const data = {};
        let page = req.params.page;
        // page=parseInt(page);
        if (!page) {
            page = 1;
        }
      //  const pageStart =page;
      //  console.log(page);
        const limit = 6;
        const offset = (page - 1) * limit ;
        let subPoster = product.findByOffset(limit, offset);
        subPoster.then(rows1 => {
            data.list_product = rows1;
            //console.log(data.list_product);
            res.render('list_products', {title: 'Danh sách sản phẩm', data});
        });
    }
};


