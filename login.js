function kt(){
    const email = document.getElementById("email_field").value;
    const password = document.getElementById("password_field").value;
    if(email == "" || password == ""){
        document.getElementById("hidden-title-email").style = "display: block; font-size: 12px; color: red; margin: 0;";
        document.getElementById("hidden-title-email").innerText = "Vui lòng nhập email";
        document.getElementById("hidden-title-password").style = "display: block; font-size: 12px; color: red; margin: 0;";
        document.getElementById("hidden-title-password").innerText = "Vui lòng nhập password";
    }
    if(email >= 8 || password >= 8){
        document.getElementById("hidden-title-email").style = "display: block; font-size: 12px; color: red; margin: 0;";
        document.getElementById("hidden-title-email").innerText = "Vui lòng nhập email hơn 8 chữ số";
        document.getElementById("hidden-title-password").style = "display: block; font-size: 12px; color: red; margin: 0;";
        document.getElementById("hidden-title-password").innerText = "Vui lòng nhập password hơn 8 chữ số";
    }
    else if(email == "haha@gmail.com" && password == "11111111"){
        window.location.href = "index.html";
    }else{
        if(email == "haha@gmail.com" && password != "11111111"){
            document.getElementById("hidden-title-password").style = "display: block; font-size: 12px; color: red; margin: 0;";
            document.getElementById("hidden-title-password").innerText = "Password không chính xác";
        }else if(email != "admin@gmail.com" && password == "123"){
            document.getElementById("hidden-title-email").style = "display: block; font-size: 12px; color: red; margin: 0;";
            document.getElementById("hidden-title-email").innerText = "Email không chính xác";
        }else{
            document.getElementById("hidden-title-email").style = "display: block; font-size: 12px; color: red; margin: 0;";
            document.getElementById("hidden-title-email").innerText = "Email không chính xác";
            document.getElementById("hidden-title-password").style = "display: block; font-size: 12px; color: red; margin: 0;";
            document.getElementById("hidden-title-password").innerText = "Password không chính xác";
        }
    }
}
var emailInput = document.getElementById('email_field');
var passwordInput = document.getElementById('password_field');

emailInput.addEventListener('click', function() {
  document.getElementById('hidden-title-email').style.display = 'none';
  document.getElementById('hidden-title-password').style.display = 'none';
});

passwordInput.addEventListener('click', function() {
  document.getElementById('hidden-title-email').style.display = 'none';
  document.getElementById('hidden-title-password').style.display = 'none';
});