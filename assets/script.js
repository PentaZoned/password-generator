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
  // Character arrays
  const lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  const numericArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  // Excluded \ because it was making a weird syntax error.
  const specialArray = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "{", "|", "}", "`"];

  var charArray = [];


  // Password length requirement
  var numChar = prompt("Enter a number from 8 to 128 for the number of characters.", "Ex. 20");

  // If user inputs a number not between 8 and 128, loop until user input is between 8 and 128
  while (numChar < 8 || numChar > 128) {
    alert("Number is not between 8 and 128");
    var numChar = prompt("Enter a number from 8 to 128 for the number of characters.");
    }

  var lowercase = confirm("Do you want lowercase letters in the password?");
  if (lowercase === true) {
    charArray.push(...lowerArray);
  }

  var uppercase = confirm("Do you want uppercase letters in the password?");
  if (uppercase === true) {
    charArray.push(...upperArray);
  }

  var numeric = confirm("Do you want numbers in the password?");
  if (numeric === true) {
    charArray.push(...numericArray);
  }
  
  var specialCharacters = confirm("Do you want special characters in the password?");
  if (specialCharacters === true) {
    charArray.push(...specialArray);
  }

  // Displays error message when no character options are selected
  if (lowercase === false && uppercase === false && numeric === false && specialCharacters === false) {
    alert("Password cannot be created without any characters options.");
  }

  numChar = Number(numChar);
  var passTemplate = "";
  for (var i = 0; i < numChar; i++) {
    var k = Math.floor((Math.random() * charArray.length));
    passTemplate = passTemplate.concat(charArray[k]);
  }
  return passTemplate;
}


// Allows the button to be used for interation and starts the js functions
generateBtn.addEventListener("click", writePassword);