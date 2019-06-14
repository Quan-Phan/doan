
exports.my_profile=function (req,res) {

    const user=req.user;
    if(!user){
        res.redirect('/login');
    }
    res.render('my_profile',{user});
};