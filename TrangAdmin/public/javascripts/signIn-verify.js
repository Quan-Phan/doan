function verifyLoginAdmin(){
	var username = document.getElementById("userNameAdmin").value;
	var password = document.getElementById("userPassAdmin").value;
	
	if(username==''){
		document.getElementById("noticeUserNameAdmin").innerHTML="Tên tài khoản không được để trống!";
	}
	else{
		document.getElementById("noticeUserNameAdmin").innerHTML="";
	}
	
	if(password==''){
		document.getElementById("noticePassAdmin").innerHTML="Mật khẩu không được để trống!";
	}	   
	else{
		document.getElementById("noticePassAdmin").innerHTML="";
	}
	
}