// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(onclick = "generateBtn") {

  var passwordNumbers = confirm("Would you like to include numbers?");
  if (passwordNumbers === true) {
    for (var i = 0; i < 10; i++) {
      var passwordNumbers = Math.floor(Math.random() * 10) - 1;
    }
  }
  return ;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
