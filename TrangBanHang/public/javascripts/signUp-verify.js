function verifySignUp(){
	var username = document.getElementById("txtUserName").value;
	var password = document.getElementById("txtPassWord").value;
	//var retypePass = document.getElementById("txtPassWordAgain").value;
	var i=0;
	var validate;
	if(username==''){
		document.getElementById("noticeUsername").innerHTML="Tên tài khoản không được để trống!";
	}
	else{
		document.getElementById("noticeUsername").innerHTML="";
	}
	
	if(password==''){
		document.getElementById("noticePassword").innerHTML="Mật khẩu không được để trống!";
	}
	else if(password!='' && password.length<8){
		document.getElementById("noticePassword").innerHTML="Mật khẩu phải trên 8 kí tự!";
	}
	else if(password.length>=8){
		if(!/\d/.test(password)||!/[a-z]/.test(password)||!/[A-Z]/.test(password)||/[^0-9a-zA-Z]/.test(password)) validate=false;
		else validate=true;
	}		   
	else{
		document.getElementById("noticePassword").innerHTML="";
	}
	if(validate==false){
		document.getElementById("noticePassword").innerHTML="Mật khẩu phải bao gồm số, kí tự thường và in hoa";
	}	
	else if(validate==true){
		document.getElementById("noticePassword").innerHTML="";
	}
	return false;
}
function verifyPassword(){
	var password = document.getElementById("txtPassWord").value;
	var retypePass = document.getElementById("txtPassWordAgain").value;
	if(password==retypePass||password==''){
		document.getElementById("noticeRetypePassword").innerHTML="";
		
	}
	else {
		document.getElementById("noticeRetypePassword").innerHTML="Mật khẩu và mật khẩu xác nhận không khớp!!!";
	}
	return false;
}