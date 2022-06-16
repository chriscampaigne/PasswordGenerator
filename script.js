// Assignment code here\
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecial;
var userChoices;

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
"n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"]

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

 passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Function

function generatePassword() {
  passwordLength= prompt("How many characters would you like your password to be? Please choose between 8 and 128");

  if(!passwordLength) {
    alert("Please type a desired number between 8 and 128")
  

  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Please choose between 8 and 128");
  

} else {
  confirmLower = confirm("Will this password have lowercase letters?");
  confirmUpper = confirm("Will this password have uppercase letters?");
  confirmNumber = confirm("Will this password have numbers?");
  confirmSpecial = confirm("Will this password have special characters?");

};

if(!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecial) {
  userChoices = alert("Please choose a criteria");

} else if (confirmLower && confirmUpper && confirmNumber && confirmSpecial) {
  userchoices = lowerCase.concat(upperCase, numbers, special);
}
  else if (confirmLower && confirmUpper && confirmNumber) {
    userchoices = lowerCase.concat(upperCase, numbers);
}
  else if (confirmLower && confirmUpper && confirmSpecial) {
    userChoices = lowerCase.concat(upperCase, special);
}
  else if (confirmLower && confirmNumber && confirmSpecial) {
    userChoices = lowerCase.concat(numbers, special);
}
  else if (confirmUpper && confirmNumber && confirmSpecial) {
    userChoices = upperCase.concat(numbers,special);
}
  else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
}
  else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
}
  else if (confirmLower && confirmSpecial) {
    userChoices = lowerCase.concat(special);
}
  else if (confirmNumber && confirmSpecial) {
    userChoices = numbers.concat(special);
}
  else if(confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
}
  else if(confirmUpper && confirmSpecial) {
    userChoices = upperCase.concat(special);
}
  else if (confirmLower) {
    userChoices = lowerCase;
}
  else if (confirmUpper) {
    userChoices = upperCase;
}
  else if (confirmNumber) {
    userChoices = numbers;
}
  else if (confirmSpecial) {
    userChoices = special;
};


  // Empty variable for the password lenght
  var passwordBlank = [];
  
  // Loop for random selection
  for (var i = 0; i < passwordLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}
