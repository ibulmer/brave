function validateForm() {
  var passwordValid = true;
  var name = document.forms["signup-form"]["username"].value;
  var password = document.forms["signup-form"]["password"].value;
  var usernameDiv = document.getElementById("username");
  var passwordDiv = document.getElementById("password");
  var errorDiv = document.getElementById("error");
  var passwordErrorMessage = null;

  if (name === null || name === ""){
    usernameDiv.style.borderStyle="solid";
    errorDiv.style.display="block";
    errorDiv.innerHTML =  "<span class = 'down'>Name cannot be blank</span>";
    return false;
  } else {
    usernameDiv.style.borderStyle="none";
  }
  function checkPassword() {
    console.log(password);
    if (password === null || password === "") {
      passwordValid = false;
      passwordErrorMessage = "<span class = 'down right' Password cannot be blank</span>";
    }
    if (password.toString().length < 6) {
    passwordValid = false;
      if(!passwordErrorMessage) {
        passwordErrorMessage = "<span class = 'down right'> Password is too short</span>";
      }
    }
    //loop through password check if it has at least one capital letter and 1 non alpha-numeric character
    var capitals = 0;
    var nonAN = 0;
    //change the input into a string array;
    var arr = password.toString().split("");
    var reg = /[^A-Za-z0-9 ]/;
    for (var i=0; i<arr.length; i++) {
      //check for capital letters
      if (arr[i].toLowerCase()!==arr[i]) {
        capitals++;
      }
      //if reg.test is true arr[i] is a non alphanumeric character
      if (reg.test(arr[i])) {
        nonAN++;
      }
    }
    if (capitals === 0) {
      passwordValid = false;
      if (!passwordErrorMessage){
        passwordErrorMessage = "<span class = 'down right'> Password must contain at least one capital letter</span>";
      }
    }
    if (nonAN === 0) {
      passwordValid = false;
      if(!passwordErrorMessage) {
        passwordErrorMessage = "<span class = 'down right'> Password must contain at least one non Alpha-Numeric letter</span>";
      }
    }
  }
  checkPassword(password);
  if (!passwordValid){
    passwordDiv.style.borderStyle = "solid";
    errorDiv.style.display = "block";
    errorDiv.innerHTML = passwordErrorMessage;
    return false;
  }
}

document.getElementById('toggle').onclick = function(e){
  document.getElementById('show').style.display="block";
}

document.getElementById('off').onclick = function(e){
  document.getElementById('show').style.display="none";
}



