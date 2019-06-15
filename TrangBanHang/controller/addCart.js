var car=require('../model/cart');

module.exports={
    add: (req,res)=>{
        let id=req.params.idSP;
        console.log(id);
        car.insert(id);
        res.redirect('/cart');
    },

};
