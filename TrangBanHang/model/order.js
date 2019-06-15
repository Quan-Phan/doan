var connect=require('../dbs/index');

module.exports={

    insert:(ten,diachi,ngaydathang,thanhtoan,idTrangThai)=>{
        // var sql = `insert into ${tableName} set ?`;
        //1: đang giao
        var sql="INSERT INTO orders (tenkhachhang,diachi,ngaydathang,thanhtoan,idTrangThai) VALUES ('"+ten+"','"+diachi+"','"+ngaydathang+"','"+thanhtoan+"','"+1+"')";
        return connect.load(sql);
    }
};