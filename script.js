// Assignment Code
var generateBtn = document.querySelector("#generate");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var specialCharacters = ["!", "#", "$", "%", "&", "()", "*",
  "+", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[",
  "]", "^", "_", "`", "{", "|", "}", "~"];
var selectNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var passwordCharacters = [];

// Write password to the #password input

function getRandom(arr) {
  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;
}

function generatePassword() {

  var characterLength = prompt("Select a value between 8 and 128");
  var upperCaseChoice = confirm("Would you like to use upper case letters?");
  var lowerCaseChoice = confirm("Would you like to use lower case letters?");
  var specialCharactersChoice = confirm("Would you like to use special characters?");
  var selectNumbersChoice = confirm("Would you like to use numbers?");

  // Check to make sure that the value is in the expected range
  //if (characterLength < 8 || characterLength > 128){}



  if (upperCaseChoice === true) {
    passwordCharacters = passwordCharacters.concat(upperCase);

    console.log(passwordCharacters)


  }
  if (lowerCaseChoice === true) {
    passwordCharacters = passwordCharacters.concat(lowerCase);
    console.log(passwordCharacters)


  }
  if (specialCharactersChoice === true) {
    passwordCharacters = passwordCharacters.concat(specialCharacters);
    console.log(passwordCharacters)


  }
  if (selectNumbersChoice === true) {
    passwordCharacters = passwordCharacters.concat(selectNumbers);
    console.log(passwordCharacters)


  }

  var result = ""
  for (var i = 0; i < characterLength; i++) {

    result += passwordCharacters[(Math.floor(Math.random() * passwordCharacters.length))];
  }
  return result

}

function writePassword() {
  var generatedPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = generatedPassword;
}


generateBtn.addEventListener("click", writePassword);

