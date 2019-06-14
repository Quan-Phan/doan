
exports.my_profile=function (req,res) {

    const user=req.user;
    res.render('my_profile',{user});
};