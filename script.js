// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(event) {
  //prevents submit defacult
  event.preventDefault();

  //prompt user for password options
  var userLength = prompt("How many characters should the password be?");

  //validate length requirements
  if (userLength < 7 || userLength > 129) {
    alert("Password must be between 8 and 128 characters. Please try again.");
    return;
  }

  var userIncludeSpecialChars = confirm(
    "Would you like to include special characters?"
  );
  var userIncludeNums = confirm("Would you like to include numbers?");
  var userIncludeUCase = confirm(
    "Would you like to include upper case characters?"
  );
  var userIncludeLCase = confirm(
    "Would you like to include lower case characters?"
  );
  //validate user has selected at least one option
  if (
    !userIncludeSpecialChars &&
    !userIncludeNums &&
    !userIncludeLCase &&
    !userIncludeLCase
  ) {
    alert("You must select at least one option to include. Please try again.");
    return;
  }

  //gernerate password with user selections
  var password = generatePassword(
    (pwLength = userLength),
    (pwIncludeSpecialChars = userIncludeSpecialChars),
    (pwIncludeNumbers = userIncludeNums),
    (pwIncludeUpperCase = userIncludeUCase),
    (pwIncludeLowerCase = userIncludeLCase)
  );

  //set password element and its value
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
      String.fromCharCode(
        randomCharCodes[Math.floor(Math.random() * randomCharCodes.length)]
      );
  }

  return tempPW;
}

function pushRangeToArray(start, end, src) {
  //function that adds a range of numbers to array ex. 1-5
  for (var i = start; i <= end; i++) {
    src.push(i);
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
