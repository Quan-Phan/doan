var nodemailer=require('nodemailer');

//let transporter = nodemailer.createTransport('smtps://caronlinecenter%40gmail.com:Caronline123@smtp.gmail.com');
let email="phanquankrb@gmail.com";
const output=`
<h4 style="color: red">Car-Online</h4>
<p>Xin chào bạn, tôi là đại diện cho Car-Online để gửi mail cho bạn</p>
<span>Mã xác nhận để kịch hoạt tài khoản của bạn là: <p style="color: #2AB391;font-size: 20px">1234</p></span>
`;
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'caronlinecenter@gmail.com', // generated ethereal user
        pass: 'Caronline123' // generated ethereal password
    }
});
let  mailOptions={
    from: '"CarOnline_Center" <foo@example.com>', // sender address
    to: `${email}`, // list of receivers
    subject: 'Hello ', // Subject line
    text: 'Hello world', // plain text body
    html: output // html body
};
transporter.sendMail(mailOptions,function (err,result) {
    if(err){
        console.log("Lỗi mail");
    }
    else {
        console.log("mail sent: "+result.response);
    }
});