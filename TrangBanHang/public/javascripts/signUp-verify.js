
function verifyUsername(){
	var username = document.getElementById("txtUserName").value;	
	if(username.length>=6){
	var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			
		 if(this.responseText=="0"){
			 document.getElementById("noticeUsername").innerHTML="Bạn có thể dùng tài khoản này";
			 document.getElementById("noticeUsername").style.color = "green";
			}
			else{
				
				document.getElementById("noticeUsername").innerHTML="Tên tài khoản đã được sử dụng";
				document.getElementById("noticeUsername").style.color = "red";
			}
		}
	  };
	  xhttp.open("GET", "/ajax?value="+username, true);
	  xhttp.send();
	}

	if(username==''){
		document.getElementById("noticeUsername").innerHTML="Tên tài khoản không được để trống!";
	}
	else{
		document.getElementById("noticeUsername").innerHTML="";
	}	
	

}
function verifyPassword(){
	var username = document.getElementById("txtUserName").value;
	var password = document.getElementById("txtPassWord").value;
		var validate;
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

function verifyRetypePassword(){
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