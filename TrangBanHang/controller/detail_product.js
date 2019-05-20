
var connect_database =require('../dbs/index');

module.exports= {
    detail_product: (req, res) => {
        let id=req.params.id;
        connect_database.query("SELECT * FROM products WHERE id= '" +id+"'", function (error, product) {
            if (error) {
                console.log("Do not query");
            } else {
                console.log("Successful");

                //res.send(result);
                res.render('detail_product', {title: 'Chi tiết sản phẩm', product})
            }
        });

    }
};