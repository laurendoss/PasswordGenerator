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
}

function generatePassword () {

  var characterLength = prompt("Select a value between 8 and 128");
  var upperCaseChoice = confirm("Would you like to use upper case letters?");
  var lowerCaseChoice = confirm("Would you like to use lower case letters?");
  var specialCharactersChoice =  confirm("Would you like to use special characters?");
  var selectNumbersChoice = confirm("Would you like to use numbers?");

  // Check to make sure that the value is in the expected range
    //if (characterLength < 8 || characterLength > 128){}
 
    if (upperCaseChoice === true) {
      passwordCharacters = passwordCharacters.concat(upperCase)

    }
    else if (lowerCaseChoice === true) {
      passwordCharacters.concat(lowerCase);

    }
    else if (specialCharactersChoice === true) {
      passwordCharacters.concat(specialCharacters);

    }
    else if (selectNumbersChoice === true) {
      passwordCharacters.concat(selectNumbers);

    }

  //var passwordLength = passwordCharacters.length;
  var result = ""
  for ( var i = 0; i < characterLength; i++ ) {
    console.log(passwordCharacters)
     result += passwordCharacters[(Math.floor(Math.random() * characterLength))]; console.log(result)

  if (i = characterLength - 1) {
    clearPassword (result)
  }
   
   }
   function clearPassword(result) {
    document.getElementById("password").textContent=result;
   }
   



  
//on line 58 i need to add the password i generated on line 54 into the password text box in the Html 
//it is much cleaner to use prompts instead of text boxes
//input box for size of password
//need to make sure i will be getting every type of character that i put into the password characters array. i
//in "if" block , when I check to see if i they want something, add that to another array to be sure they 
//are getting every type of character. Add array to result before I start the "for" loop to ensure they have
//every type of character they ask for
//add a check to make sure they have selected at least one type of character. If they select no for everything, no password will be generated.

  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


