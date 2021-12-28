// References the ID 'generate' via a variable
var generateBtn = document.querySelector("#generate");

// Function is used to transfer the generated password to the text area 
function writePassword() {
  // The output of generatePassword function is assigned to the password variable as a string
  var password = generatePassword();
  // Creates a reference variable used to show the generated password to the user
  var passwordText = document.querySelector("#password");
  // Assigns the password variable to the reference variable
  passwordText.value = password; 
}


function generatePassword() {

  // Password length requirement
  var numChar = prompt("Enter a number from 8 to 128 for the number of characters.", "Ex. 20");

  // If user inputs a number not between 8 and 128, loop until user input is between 8 and 128
  while (numChar < 8 || numChar > 128) {
    alert("Number is not between 8 and 128");
    var numChar = prompt("Enter a number from 8 to 128 for the number of characters.");
    }

  var lowercase = confirm("Do you want lowercase letters in the password?");
  var uppercase = confirm("Do you want uppercase letters in the password?");
  var numeric = confirm("Do you want numbers in the password?");
  var specialCharacters = confirm("Do you want special characters in the password?");

  if (lowercase === false && uppercase === false && numeric === false && specialCharacters === false) {
    alert("Password cannot be created without any characters options.");
  }
}


// Allows the button to be used for interation and starts the js functions
generateBtn.addEventListener("click", writePassword);