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

// Allows the button to be used for interation and starts the js functions
generateBtn.addEventListener("click", writePassword);
