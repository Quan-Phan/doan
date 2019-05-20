var connect_database=require('../dbs/connect_database');

module.exports={
    sanpham :(req,res)=> {
        const data={};
        connect_database.query("SELECT * FROM producers",function (error,list_producers) {
            if(error){
                console.log("Do not query");
            }
            else {
                console.log("Successful");
                data.list_producer=list_producers;
            }
        });
        connect_database.query("SELECT * FROM products",function (error,list_products) {
            if(error){
                console.log("Do not query");
            }
            else {
                console.log("Successful");
                data.list_product=list_products;
                res.render('SanPham/index',{ title: 'Danh sách sản phẩm',data});
            }
        });
    },
    themSanPhamPage :(req,res) => {
        //res.render('themSanPham');
        const data = {};

        connect_database.query("SELECT * FROM producers", function (error, list_producers) {
            if (error) {
                console.log("Do not query");
            } else {
                console.log("Successful");
                data.list_producer = list_producers;
            }
        });
        connect_database.query("SELECT * FROM categories", function (error, list_categories) {
            if (error) {
                console.log("Do not query");
            } else {
                console.log("Successful");
                data.list_category = list_categories;
                res.render('SanPham/themSanPham', {data});
            }
        });
    },
    themSanPham :(req,res) => {

         let filepathanh = req.body.txtFilePathAnh;
         let giaban = parseFloat(req.body.txtGiaBan);
         let mota = req.body.txtMoTa;
         let soluonghienco = parseInt(req.body.txtSoLuongHienCo);
         let ten = req.body.txtTen;
         let xuatxu = req.body.txtXuatXu;
         let idLoai = req.body.txtIdLoai;
         let idNhaSX = parseInt(req.body.txtIdNhaSX);


         let query ="INSERT INTO products (ten,giaban,filepathanh,soluonghienco,xuatxu,mota,idLoai,idNhaSX) VALUES ('"+ten+"','"+giaban+"','"+filepathanh+"','"+soluonghienco+"','"+xuatxu+"','"+mota+"','"+idLoai+"','"+idNhaSX+"')";
         connect_database.query(query,function (error,result) {
             if(error){
                 console.log("Loi");
             }
             console.log('ok');

             res.redirect('/SanPham');
          })
    },
    xoaSanPham :(req,res)=>{
        let id=req.params.id;
        let query ="DELETE FROM products WHERE id = '"+id+"'";
        connect_database.query(query,function (error,result) {
            if(error){
                console.log("Loi");
            }
            console.log('ok');

            res.redirect('/SanPham');
        })
    },
    suaSanPhamPage :(req,res)=>{
        const data={};
        let id=req.params.id;
        console.log(id);
       // let query ="SELECT * FROM products WHERE id = '"+id+"'";
        connect_database.query("SELECT * FROM products WHERE id = '"+id+"'",function (error,product) {
            if(error){
                console.log("Loi");
            }
            console.log('ok');
            data.product=product;
           // console.log(data.product[0].ten);
        });
        connect_database.query("SELECT * FROM producers", function (error, list_producers) {
            if (error) {
                console.log("Do not query");
            } else {
                console.log("Successful");
                data.list_producer = list_producers;
            }
        });
        connect_database.query("SELECT * FROM categories", function (error, list_categories) {
            if (error) {
                console.log("Do not query");
            } else {
                console.log("Successful");
                data.list_category = list_categories;
                res.render('SanPham/SuaSanPham', {data});
            }
        });
    },
    suaSanPham :(req,res)=>{
        let id=req.params.id;
        let filepathanh = req.body.txtFilePathAnh;
        let giaban = parseFloat(req.body.txtGiaBan);
        let mota = req.body.txtMoTa;
        let soluonghienco = parseInt(req.body.txtSoLuongHienCo);
        let ten = req.body.txtTen;
        let xuatxu = req.body.txtXuatXu;
        let idLoai = req.body.txtIdLoai;
        let idNhaSX = parseInt(req.body.txtIdNhaSX);
        console.log(ten);

        let query = "UPDATE `products` SET `filepathanh` = '" + filepathanh + "', `giaban` = '" + giaban + "', `mota` = '" + mota + "', `soluonghienco` = '" + soluonghienco + "', `ten` = '" + ten + "', `xuatxu` = '" + xuatxu + "', `idLoai` = '" + idLoai + "', `idNhaSX` = '" + idNhaSX + "' WHERE `id` = '" + id + "'";
        connect_database.query(query, (err, result) => {
            if (err) {
                return res.status(500).send(err);
            }
            res.redirect('/SanPham');
        });
    }
};
