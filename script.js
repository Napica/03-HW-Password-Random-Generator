// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword() {
  var password = "";
  var newPassword = "";

  var checkPasswordLength = prompt(
    "How many characters would you like the password to be?"
  );

  if (checkPasswordLength < 8 || checkPasswordLength > 128) {
    alert("Please choose a number between 8 and 128.");
    generatePassword();
  } else {
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordUpperCase = confirm(
      "Would you like the password to have upper case letters?"
    );

    if (passwordUpperCase == true) {
      password = password + upperCase;
    }
  }

  for (var i = 0; i < checkPasswordLength; i++) {
    var random = Math.floor(Math.random() * password.length);
    newPassword = newPassword + password[random];
  }

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
