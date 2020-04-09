// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var charArray = [];
var letters = "abcdefghijklmnopqrstuvwxyz";
var lowerCaseArray = letters.split("");
var upperCaseArray = letters.toUpperCase().split("");
var specChar = "!@#$%^&*()?<>";
var specCharArray = specChar.split("");
var numberString = "1234567890";
var numberArray = numberString.split("");
var newPassword = "";
var passLength = 0;

// function that prompts password length, only accept responses from 8-128
function passQuery(){
  while(passLength === 0){ 
    var lengthNumber = prompt("Please choose a length for your password between 8 and 128 characters.", "number");
      if(lengthNumber>=8 && lengthNumber<=128){
        (passLength=parseInt(lengthNumber));
      }
     else(alert("Invalid password length. Please choose a number between 8 and 128"));
  
  }
}
// function that prompts what characters to include, adjust charArray accordingly
function passParameters(){
  alert("We will now generate a password of " + passLength + " characters.");
  
  var confirmLower = confirm("Would you like to include lower case letters in your password?");
  
  if(confirmLower === true){
    charArray.push(lowerCaseArray);
    console.log(charArray);
  } 

  var confirmUpper = confirm("Would you like to include upper case letters in you password?");

  if(confirmUpper === true){
    charArray.push(upperCaseArray);
    console.log(charArray);
  }

  var confirmNumber = confirm("would you like to include numbers in your password?");

  if(confirmNumber === true){
    charArray.push(numberArray);
    console.log(charArray);
  }

  var confirmSpecial = confirm("Would you like to include special characters in your password?");

  if(confirmSpecial === true){
    charArray.push(specCharArray);
    console.log(charArray);
  }
}

// function for finding random index in any array
function randomIndex(array){
  return Math.floor(Math.random()*array.length);
}

// function for randomly creating password from the charArray
function createPassword(){
  for(i=0; i<passLength; i++){
    var array1 = charArray[randomIndex(charArray)];
    var randomChar = array1[randomIndex(array1)];
    newPassword += randomChar;
  }
}

// reset function to reset password and text content for a new iteration
function passwordReset(){
  passLength=0;
  charArray = [];
  passwordText.textContent = "";
  newPassword = "";
}

// Combining all necessary functions into one large function
function generatePassword(){
  passwordReset();
  passQuery();
  passParameters();
  createPassword();
  writePassword();
}

// Write password to the #password input
function writePassword() {
  passwordText.textContent = newPassword;
}

// Add event listener to generate button
generateBtn.addEventListener("click", function(){
  generatePassword();
})
