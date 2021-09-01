// Assignment code here
var numericChar = ["1234567890"];
var lowerCaseChar = ["abcdefghijklmnopqrstuvwxyz"];
var upperCaseChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialCaseChar = ["!@#$%^&*()"];

var getPassLength = function() {
  var passLength = parseInt(
    window.prompt("How many characters do you want in your password? Must be between 8 and 120")
  )
    if (passlength < 8 || passLength > 120) {
    window.alert("Password needs to be between 8 and 120 characters")
    getPassLength()
  }
};

var getPassType = function () {
  var numbers = window.prompt("Do you want to include numbers in your password?");
  if (numbers === "yes" || "no") {
    (numbers === numericChar);
  } else {
    window.alert("Please type yes or no")
  }
  var lowercase = window.prompt("Do you want to include lowercase letters in your password?");
  if (lowercase === "yes" || "no") {
    (lowercase === lowerCaseChar);
  } else {
    window.alert("Please type yes or no")
  }
  var uppercase = window.prompt("Do you want to include uppercase letters in your password");
  if (uppercase === "yes" || "no") {
    (uppercase === upperCaseChar);
  } else {
    window.alert("Please type yes or no")
  }
  var specialChar = window.prompt("Do you want to include special characters in your password?");
  getPassType()
  if (specialChar === "yes" || "no") {
    (specialChar === specialCaseChar);
  } else {
    window.alert("Please type yes or no")
  }
};

var getPass = {
  numbers: numbers,
  lowercase: lowercase,
  uppercase: uppercase,
  specialChar: specialChar,
  
};

return getPass;

var generatePass = document.querySelector('#generate');

var createPass = function() {
  var newPass = generatePass()
  var passText = document.querySelector('#password');

  passText.value = newPass;
}


generatePass.addEventListener("click", createPass);


