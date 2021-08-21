// Assignment code here
var numericChar = ["1234567890"];
var lowerCaseChar = ["abcdefghijklmnopqrstuvwxyz"];
var upperCaseChar = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var specialCaseChar = ["!@#$%^&*()"];

function getPass() {
  var passLength = parseInt(
    prompt('How many characters do you want in your password?')
  );
  if (isNotaNumber(passLength) = true) {
    alert('Password length must be a number');
    return;
  }
  if (passLength < 8 ) {
    alert('Password must contain at least 8 characters')
  return;
  }
  if (passLength > 128) {
    alert('Password cannot have more than 128 characters')
  }
}
var numbers = confirm(
  'Click OK to include numbers'
);
var lowercase = confirm(
  'Click OK to include lowercase letters'
);
var uppercase = confirm(
  'Click OK to include uppercase letters'
);
var specialChar = confirm(
  'Click OK to include special characters'
);


var charArray
if (numbers === true) {
  charArray.push(numbersChar);
}
if (lowercase === true) {
  charArray.push(lowerCaseChar);
}
if (uppercase === true) {
  charArray.push(upperCaseChar);
}
if (specialChar === true) {
  charArray.push(specialCaseChar);
}

function createPass(length) {
  pass = '';
  var characterLength = characterString.length;
  for (var i = 0; i < length; i++) {
    var randomPass = (Math.floor(Math.random() * characterLength));
    var pass = characterString.charAt(randomPass);
    console.log(pass);
    passArray.push(pass);
  }
}

passArray = [];
console.log(pass);

createPass(passLength);

var generatedPass = passArray.join("");
alert('Your password is: ' + generatedPass);


var generate = document.getElementById("generate");
var password = document.getElementById("password");
generate.onclick = createPass();


