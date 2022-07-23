//Figure out what the starting code does.
//Define the generate password function. Use console.log to make sure things are connecting. 

//Pseudocode Steps to Begin:
//Step 1: Create arrays of all characters & symbols.
//Step 2: prompt the user for the pass criteria. 
//        a. Password length between 8- 128
//        b. prompt the user for lowercase, uppercase, numeric or special characters.
//Step 3: validate the input (using if or do while)
//Step 4: generate password using prompts
//Step 5: display generated pass on page.


// Assignment code here
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","^","&","•","?"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

function generatePassword() {
  // console.log("Button is Working!")
    var askQuestions = window.confirm("Click OK for questions that will lead you to a secure password.");
      // If user clicks 'cancel' they will be prompted to start over
      if (!askQuestions) {
        alert("No password for you!");
  
        return "press 'Generate Password' to begin again.";
      }
    var charLength = window.prompt("How many characters would you like your password to contain?");
      // If a number is chosen less than 8 or greater than 128 user will be prompted to start over
      if (charLength <8 || charLength >128) {
        alert("must chose a number between 8 and 128");
    
        return "press 'Generate Password' to begin again.";
      }
    var specialChar = window.confirm("Click OK to include special characters.");
    var numericChar = window.confirm("Click OK to include numeric characters.");
    var lowerChar = window.confirm("Click OK to include lowercase letters.");
    var upperChar = window.confirm("Click OK to include uppercase letters.");
    
    
   

  return "Password will go here!";// Used to see where the password will be displayed.
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password"); 

  //This will generate the random password 
  //for (var i = 0; i < characters.length; i++) {
    //final += combo[Math.floor(Math.random() + combo.length)];
  //}

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
