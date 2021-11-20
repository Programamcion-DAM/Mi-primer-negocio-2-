var username = document.getElementById("register_name_field");
var email = document.getElementById("email_field");
var password = document.getElementById("register_password_field");
var confirm_password = document.getElementById("confirm_password_field");
var btn_register = document.getElementById("btn_register");

btn_register.addEventListener('click', () =>{
    if(password.value == confirm_password.value){
        window.location.href = 'add/'+username.value+'/'+email.value+'/'+password.value;
    }
})