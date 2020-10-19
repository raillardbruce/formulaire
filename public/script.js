var password = document.getElementById("password")
var confirm_password = document.getElementById("confirmpassword");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Mots de passe pas identique");
  } else {
    confirm_password.setCustomValidity('');
  }
};

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;
