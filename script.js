// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(onclick = "generateBtn") {
  var storedPassword = ""
  var newPassword = "";

  var checkPasswordLength = prompt("How many characters would you like the password to be?")
    if ((isNaN(checkPasswordLength)) || (checkPasswordLength < 8) || checkPasswordLength > 128) {
      alert("Please choose a number between 8 and 128.")
      (generatePassword());
    } else {
      alert("null");
    }
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
