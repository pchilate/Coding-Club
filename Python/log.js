var log;
function login(){
  log = open("log.html","log")
}

function validateForm() {
  var valid = true;
  var user = document.getElementById('username').value
  var pass = document.getElementById('password').value
  var numbers = /[0-9]/g;
  var upperCaseLetters = /[A-Z]/g;
  var lowerCaseLetters = /[a-z]/g;
  if (user == "" && pass == "") {
    alert("Please enter the login credential!");
    valid = false;
    return valid;
  }
  else if (user == ""){
    alert("Username not provided!")
    valid = false;
    return valid;
  }
  else if(pass == ""){
    alert("Please provide the password")
    valid = false;
    return valid;
  }
  else if (pass.length < 8){
    alert("Password Must Contain\n 1. 8-16 character\n 2. small case letter\n 3. Digits from [0-9]\n 4. atleast one capital letter")
    valid = false;
    return valid
  }

  else
      return valid

}