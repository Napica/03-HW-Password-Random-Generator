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
  // This initializes the password generation
  var checkPasswordLength = prompt(
    "How many characters would you like the password to be?"
  );
  // This gives parameters for the password length
  if (checkPasswordLength < 8 || checkPasswordLength > 128) {
    alert("Please choose a number between 8 and 128.");
    generatePassword();
  } else {
    // this allowes the user to choose to use uppercase letters
    var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordUpperCase = confirm(
      "Would you like the password to have upper case letters?"
    );

    if (passwordUpperCase == true) {
      password = password + upperCase;
    }
    // this allows the user to choose to use lowercase letters
    var lowerCase = "abcdefghijklmnopqrstuvwxyz";
    var passwordLowerCase = confirm(
      "Would you like the password to have lower case letters?"
    );
    if (passwordLowerCase == true) {
      password = password + lowerCase;
    }
  }
  // this allows the user to choose numbers
  var numbers = "123456789";
  var passwordNumbers = confirm("Would you like the password to have numbers?");
  if (passwordNumbers == true) {
    password = password + numbers;
  }
  // this allows the user to choose special characters
  var characters = "!@#$%^&*()>?|{}[]";
  var passwordCharacters = confirm(
    "Would you like the password to have special Characters?"
  );
  if (passwordCharacters == true) {
    password = password + characters;
  }

  for (var i = 0; i < checkPasswordLength; i++) {
    var random = Math.floor(Math.random() * password.length);
    newPassword = newPassword + password[random];
  }

  return newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
