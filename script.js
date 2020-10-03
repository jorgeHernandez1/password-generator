// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {

  event.preventDefault();

  var password = generatePassword(25, true, true, true, true);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

function generatePassword(
  pwLength,
  pwIncludeSpecialChars,
  pwIncludeNumbers,
  pwIncludeUpperCase,
  pwIncludeLowerCase
) {
  //random password generator that builds by concatinating random charachter
  //from random number converted to String.fromCharCode

  //declare temp var we will sue to build password
  var tempPW = "";
  var randomCharCodes = [];

  //push range of char codes to array we will chose random char from
  if (pwIncludeSpecialChars) {
    pushRangeToArray(33, 47, randomCharCodes);
    pushRangeToArray(58, 64, randomCharCodes);
    pushRangeToArray(91, 96, randomCharCodes);
    pushRangeToArray(123, 126, randomCharCodes);
  }
  if (pwIncludeNumbers) {
    pushRangeToArray(48, 57, randomCharCodes);
  }
  if (pwIncludeUpperCase) {
    pushRangeToArray(65, 90, randomCharCodes);
  }
  if (pwIncludeLowerCase) {
    pushRangeToArray(97, 122, randomCharCodes);
  }
  
  //loop until we get to user provided length
  for (currentChar = 0; currentChar < pwLength; currentChar++) {
    tempPW =
      tempPW +
      String.fromCharCode(randomCharCodes[Math.floor(Math.random() * randomCharCodes.length)]);
  }
  
  return tempPW;
}

function pushRangeToArray(start, end, src) {
  //function that adds a range of numbers to array ex. 1-5
  for (var i = start; (i <= end); i++) {
    src.push(i);
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
