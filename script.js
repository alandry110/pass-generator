//Figure out what the starting code does.
//Define the generate password function. Use console.log to make sure things are connecting. 

//Pseudocode Steps to Begin:
//Step 1: Create arrays of all characters & symbols.
//Step 2: prompt the user for the pass criteria. 
//        a. Password length between 8- 128
//        b. prompt the user for lowercase, uppercase, numeric or special characters.
//Step 3: validate the input
//Step 4: generate password using prompts
//Step 5: display generated pass on page.

// Set of arrays: 
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","^","&","•","?"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// Variables for questions
var charLength = "How many characters would you like your password to contain?";
var specialChar = "Click OK to include special characters.";
var numericChar = "Click OK to include numeric characters.";
var lowerChar = "Click OK to include lowercase letters.";
var upperChar = "Click OK to include uppercase letters.";




// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

function generatePassword() {
  console.log("Button is Working!")// Used console.log to see if the button was working 

  return "Password will go here!";// Used to see where the password will be displayed.
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password"); 

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
