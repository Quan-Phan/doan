
var product =require('../model/product');

module.exports= {
    detail_product: (req, res) => {
        let id=req.params.id;
        const data={};
        let subPoster = product.detail_product(id);
        subPoster.then(rows1 =>{
            data.list_product=rows1;
            // console.log(data.list_product);
            res.render('detail_product',{title: 'Danh sách sản phẩm',data});
        });
    }
};