var member=require('../model/member');

exports.take_pass =function (req,res) {

    // const data={};
    // let subPoster = member.get("Hau");
    // subPoster.then(rows1 =>{
    //     data.list_product=rows1;
    //      console.log(data.list_product);
    //     //res.render('detail_product',{title: 'Danh sách sản phẩm',data});
    // });

    const user=member.get("Hau");
       // console.log("OK");
        user.then(row=>{
            console.log(row[0].mat_khau);
        })

    //res.render('take_pass_again')
}