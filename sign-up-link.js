function kt(){
    const email = document.getElementById("email_field").value;
    const password = document.getElementById("password_field").value;
    const retypePass = document.getElementById("password_field-retype").value;
    if(email == "" || password == ""){
        document.getElementById("hidden-title-email").style = "display: block; font-size: 12px; color: red; margin: 0;";
        document.getElementById("hidden-title-email").innerText = "Vui lòng nhập email";
        document.getElementById("hidden-title-password").style = "display: block; font-size: 12px; color: red; margin: 0;";
        document.getElementById("hidden-title-password").innerText = "Vui lòng nhập password";
    }
    else if(password!= retypePass){
        document.getElementById("hidden-title-password-retype").style = "display: block; font-size: 12px; color: red; margin: 0;";
        document.getElementById("hidden-title-password-retype").innerText = "Mật khẩu không trùng khớp";
    }else{
      alert("Đăng ký thành công");
      window.location.href = "login.html";
    }
}