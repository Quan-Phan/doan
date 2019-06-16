var member=require('../model/member');
var bcrypt=require('bcrypt');

exports.my_profile=function (req,res) {

    const signOut="Log out";
    const user=req.user;
    let thongbao="abc";
    //let thongbao=req.query.thongbao;
    if(!user){
        res.redirect('/login');
    }
    console.log(thongbao);
    res.render('my_profile',{user,signOut,thongbao});
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
    let thongbao;
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
                    thongbao="Mật khẩu cũ không chính xác";
                    //res.redirect('/');
                    res.render('my_profile',{user,signOut,thongbao})
                    //res.redirect(`/my_profile?thongbao=${thongbao}`);
                }
                else {
                    bcrypt.genSalt(10, function (err, salt) {
                        bcrypt.hash(matkhaumoi, salt, function (err, hash) {
                            member.updateMK(user.id, hash);
                            res.redirect('/logout');
                        })
                    })
                }
            })

        })
    }
};