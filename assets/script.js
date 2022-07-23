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


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var symbols = ["!","@","#","$","%","^","&","•","?"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var charLength = "";
var selection = [];
var userPass = "";

function generatePassword() {
    var start = window.confirm("Click OK for questions that will lead you to a secure password.");
      // If user clicks 'cancel' they will be prompted to start over
      if (!start) {
        alert("No password for you!");
        return "Press 'Generate Password' to begin again.";
      }

    var charLength = window.prompt("How many characters would you like your password to contain?");
      // If a number is chosen less than 8 or greater than 128 user will be prompted to start over
      if (charLength < 8 || charLength > 128) {
        alert("Must chose a number between 8 and 128");
        return "Press 'Generate Password' to begin again.";
      }

    var specialChar = window.confirm("Click OK to include special characters.");
    var numericChar = window.confirm("Click OK to include numeric characters.");
    var lowerChar = window.confirm("Click OK to include lowercase letters.");
    var upperChar = window.confirm("Click OK to include uppercase letters.");

    if (!specialChar && !numericChar && !lowerChar && !upperChar) {
      alert("You need to pick at least one!")
      return "Error! Press 'Generate Password' to begin again.";
    }
    
    if (numericChar) {
      selection = selection.concat(numbers);
    }

    if (specialChar) {
      selection = selection.concat(symbols);
    }

    if (lowerChar) {
      selection = selection.concat(lowercase);
    }
    
    if (upperChar) {
      selection = selection.concat(uppercase);
    }
    
    console.log(selection)
      
    for (var i = 0; i < charLength; i++) {
      userPass = userPass + selection[Math.floor(Math.random() * selection.length)];
      console.log(userPass)
    }
    
    return userPass;    
}
   

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password"); 


  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
