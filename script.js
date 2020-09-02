//Psuedocode

// Add onclickEvent to HTML to initalize the password generation 

// Use DOM to aim for the button and add a on-click event to trigger questions

//Prompt and confirm questions to user preference
//First question to prompt: How many characters would the user like the password to be?
//Second question to confirm:  would you like to include lowercase?
//Third question to confirm: would you like to include uppercase?
//Fourth question to confirm: would you like to include numeric values?
//Fifth questions to confirm: would you like to include special characters?


// With each prompt, set as an array.  
// With each confirm, set these out to variables of booleans 
// create for loops to generate random information for using the input from the arrays and booleans and push them into their arrays
// return combined generated password to the textarea

// function for the onClickEvent

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(onclick="generateBtn") {

  // prompts question for how long the password would be
  var passwordLength = prompt("How long you you like the password to be");
  // lets the user to choose to use upper case
  var passwordLowerCase = confirm("Would you like to include lower cases?");
  // lets the user to choose to use lower case
  var passwordUpperCase = confirm("Would you like to include upper cases?");
  // lets the user to choose to use numbers
  var passwordNumbers = confirm("Would you like to include numbers?")
  // lets the user to choose to use special characters
  var passwordCharacters = confirm("Would you like to include special characters?");
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



