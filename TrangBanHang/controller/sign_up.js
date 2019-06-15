var member=require('../model/member');
var bcrypt=require('bcrypt');

exports.sign_upPage =function (req,res) {
    const user=req.user;
    const signOut="Log out";
    res.render('sign_up',{user,signOut})
};
exports.sign_up=function (req,res) {
    //res.render('login');
   // res.redirect('/');
    let ten=req.body.ten;
    let ten_dang_nhap=req.body.username;
    let mat_khau=req.body.password;
    let email=req.body.email;
    let link_anh=req.body.link_anh;

    bcrypt.genSalt(10,function (err,salt) {
        bcrypt.hash(mat_khau,salt,function (err,hash) {
            member.insert(ten,email,link_anh,ten_dang_nhap,hash);
            res.redirect('/login');
        })
    })
};
