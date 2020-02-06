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
function writePassword() {
  var generatedPassword = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = generatedPassword;
  generatePassword();

}

function generatePassword () {

  var characterLength = prompt("Select a value between 8 and 128");
  var upperCase = confirm("Would you like to use upper case letters?");
  var lowerCase = confirm("Would you like to use lower case letters?");
  var specialCharacters =  confirm("Would you like to use special characters?");
  var selectNumbers = confirm("Would you like to use numbers?");

  // Check to make sure that the value is in the expected range
    //if (characterLength < 8 || characterLength > 128){}
 
    if (upperCase === true) {
      passwordCharacters.concat(upperCase);

    }
    else if (lowerCase === true) {
      passwordCharacters.concat(lowerCase);

    }
    else if (specialCharacters === true) {
      passwordCharacters.concat(specialCharacters);

    }
    else if (selectNumbers === true) {
      passwordCharacters.concat(selectNumbers);

    }

  var passwordLength = passwordCharacters;
  var result = ""
  for ( var i = 0; i < characterLength; i++ ) {
     result += passwordCharacters[(Math.floor(Math.random() * charactersLength))];
   
   }

   document.getElementById("password").textContent=result;

    
  


  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


