var car=require('../model/cart');
var product=require('../model/product');

module.exports={
    myCart: (req,res)=>{

        const user=req.user;
        const signOut="Log out";
        const data={};
        const list=car.list();
        list.then(row=>{

            data.list_cart=row;
            const pro=product.list();
            pro.then(row1=>{

                data.list_product=row1;
                res.render('cart',{data,signOut,user});
            })
        })
    },
};
