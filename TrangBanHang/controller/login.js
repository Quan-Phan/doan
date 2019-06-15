//var comment =require('../model/comment');

module.exports={
    loginGet: (req,res)=>{
        const user=req.user;
        const signOut="Log out";
        res.render('login',{user,signOut});
    },
    logout:(req,res)=>{
        req.logout();
        res.redirect('/login');
    }
};
