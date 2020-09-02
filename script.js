// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(onclick = "generateBtn") {
  //

  // Prompts question for how long the password would be and stores value
  var passwordLength = prompt("How long you you like the password to be");
  // Sets Boolean
  var lowerCase = true;
  // lets the user to coose to use upper case and stores boolean
  var passwordLowerCase = confirm("Would you like to include lower cases?");
  // Sets boolean
  var upperCase = true;
  // lets the user to choose to use lower case and stores boolean
  var passwordUpperCase = confirm("Would you like to include upper cases?");
  // Sets boolean
  var numbers = true;
  // lets the user to choose to use numbers and stores boolean.
  var passwordNumbers = confirm("Would you like to include numbers?");
  // Sets boolean
  var characters = true;
  // lets the user to choose to use special characters and stores booleans;
  var passwordCharacters = confirm(
    "Would you like to include special characters?"
  );
}

//generating random numbers
for (var i = 0; i <= passwordNumbers.length; i++) {
  var passwordNumbersAnswer = Math.floor(Math.random() * 128 - 1);
  console.log(passwordNumbersAnswer[i]);
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
