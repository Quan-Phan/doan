var member=require('../model/member');
var bcrypt=require('bcrypt');

exports.my_profile=function (req,res) {

    const signOut="Log out";
    const user=req.user;
    if(!user){
        res.redirect('/login');
    }
    res.render('my_profile',{user,signOut});
};
exports.my_profilePost=function (req,res) {
    let ten=req.body.ten;
    let email=req.body.email;
    let link_anh=req.body.link_anh;

    console.log(ten);
    let matkhaucu=req.body.oldPass;
    let matkhaumoi=req.body.newPass;
    console.log(matkhaucu);
    const signOut="Log out";
    const user=req.user;
    if(ten!= undefined){
        console.log(ten);
        member.update(ten,email,link_anh,user.id);
        res.redirect('/my_profile');
    }
    else {
        const people = member.getID(user.id);
        people.then(row => {
            bcrypt.compare(matkhaucu, row[0].mat_khau, function (err, rs) {
                if (rs == false) {
                    res.render('/my_profile', {message: "mật khẩu cũ không chính xác", user,signOut});
                }
                bcrypt.genSalt(10, function (err, salt) {
                    bcrypt.hash(matkhaumoi, salt, function (err, hash) {
                        member.updateMK(user.id, hash);
                        res.redirect('/logout');
                    })
                })
            })

        })
    }
};