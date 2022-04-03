var generateBtn = document.querySelector("#generate");

//array of possible characters
var lowercase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var uppercase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var special = ['@', '%', '+', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];

//function to ask user which options
function questionPromps(){
  var isValid = false;
  do {
    var passwordLength = prompt("How many characters would you like your password to be? Your password must be between 8-128 characters long.");
    var numbersChoice = confirm("Would you like to add numbers to your password?");
    var lowercaseChoice = confirm("Would you like to add some lowercase letters?");
    var uppercaseChoice = confirm("Would you like to add some uppercase letters?");
    var specialChoice = confirm("Would you like to add some special characters?");
    var responses = {
      length: passwordLength,
      numbersChoice: numbersChoice,
      lowercaseChoice: lowercaseChoice,
      uppercaseChoice: uppercaseChoice,
      specialChoice: specialChoice
    }
//conditional statements to make sure the choices meet the bare minimum
if((passwordLength < 8)||(passwordLength > 128))
  alert("Choose a number between 8 and 128");
    else if ((!numbersChoice)&&(!lowercaseChoice)&&(!uppercaseChoice)&&(!specialChoice))
      alert("Must choose at least one of these.");
      else
      isValid = true;
    
  } while(!isValid);
  return responses;
};

//function then joins the responses and creates the password
function generatePassword() {
  var passwordChoices = questionPromps();
  var possibleCombos = [];
  var finalPassword = "";

  if (passwordChoices.numbersChoice) {
    for (var i of numbers)
    possibleCombos.push(i);
  }
  if (passwordChoices.lowercaseChoice) {
    for (var i of lowercase)
    possibleCombos.push(i);
  }
  if (passwordChoices.uppercaseChoice) {
    for (var i of uppercase)
    possibleCombos.push(i);
  }
  if (passwordChoices.specialChoice) {
    for (var i of special)
    possibleCombos.push(i);
  }


  for (var i = 0; i < passwordChoices.length; i++) {
  finalPassword += possibleCombos[Math.floor(Math.random() * possibleCombos.length)];
  }
  return finalPassword;
};

//Write password for the #password input 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click",writePassword);
